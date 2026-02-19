	'use client';

	import { useEffect, useRef, useState, useCallback } from 'react';
	import * as THREE from 'three';
	import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

	/* ───────────────────────── Halftone Shaders ───────────────────────── */

	const halftoneVertex = /* glsl */ `
	varying vec3 vNormal;
	varying vec3 vWorldPos;

	void main() {
		vNormal   = normalize(normalMatrix * normal);
		vec4 wp   = modelMatrix * vec4(position, 1.0);
		vWorldPos = wp.xyz;
		gl_Position = projectionMatrix * viewMatrix * wp;
	}
	`;

	const halftoneFragment = /* glsl */ `
	precision highp float;

	varying vec3 vNormal;
	varying vec3 vWorldPos;

	uniform vec3  uColor;
	uniform vec3  uLightA;
	uniform vec3  uLightB;
	uniform float uGridSize;
	uniform vec2  uResolution;

	void main() {
		vec3 N = normalize(vNormal);

		/* two-point lighting for more sculptural feel */
		vec3 L1 = normalize(uLightA - vWorldPos);
		vec3 L2 = normalize(uLightB - vWorldPos);
		float d1 = max(dot(N, L1), 0.0);
		float d2 = max(dot(N, L2), 0.0);

		float brightness = 0.08 + d1 * 0.62 + d2 * 0.30;
		brightness = clamp(brightness, 0.0, 1.0);

		/* halftone dot grid */
		float g        = uGridSize;
		vec2  cell     = mod(gl_FragCoord.xy, g);
		float dist     = length(cell - vec2(g * 0.5));
		float maxR     = g * 0.48;
		float radius   = maxR * brightness;

		/* anti-aliased edge */
		float dot = 1.0 - smoothstep(radius - 1.0, radius + 1.0, dist);

		/* discard empty pixels so the page background shows through */
		if (dot < 0.02) discard;

		gl_FragColor = vec4(uColor * dot, dot);
	}
	`;

	/* ──────────────────────── Component ──────────────────────── */

	interface ChainsawSceneProps {
	className?: string;
	sectionId?: string;
	}

	export default function ChainsawScene({ className, sectionId }: ChainsawSceneProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const rendererRef  = useRef<THREE.WebGLRenderer | null>(null);
	const sceneRef     = useRef<THREE.Scene | null>(null);
	const cameraRef    = useRef<THREE.PerspectiveCamera | null>(null);
	const modelRef     = useRef<THREE.Group | null>(null);
	const frameRef     = useRef<number>(0);
	const scrollRef    = useRef(0);
	const [loaded, setLoaded] = useState(false);
	const [error, setError]   = useState<string | null>(null);

	const sectionRef = useRef<HTMLElement | null>(null);

	/* Gold / amber halftone material matching the site palette */
	const makeHalftoneMaterial = useCallback((resolution: THREE.Vector2) => {
		return new THREE.ShaderMaterial({
		vertexShader:   halftoneVertex,
		fragmentShader: halftoneFragment,
		transparent: true,
		side: THREE.DoubleSide,
		uniforms: {
			uColor:      { value: new THREE.Color('#D99201') },
			uLightA:     { value: new THREE.Vector3(4, 6, 5) },
			uLightB:     { value: new THREE.Vector3(-3, 2, -4) },
			uGridSize:   { value: 5.0 },
			uResolution: { value: resolution },
		},
		});
	}, []);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		/* ── Renderer ── */
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);
		rendererRef.current = renderer;

		/* ── Scene + Camera ── */
		const scene  = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
		camera.position.set(1.8, 0, 3);
		sceneRef.current  = scene;
		cameraRef.current = camera;

		/* ── Sizing helper ── */
		const resolution = new THREE.Vector2();
		const resize = () => {
		const w = container.clientWidth;
		const h = container.clientHeight;
		renderer.setSize(w, h);
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
		resolution.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
		};
		resize();
		window.addEventListener('resize', resize);

		/* ── Load FBX ── */
		const loader = new FBXLoader();
		loader.load(
		'/chainsaw.FBX',
		(fbx) => {
			/* Normalize size: fit inside a 3-unit sphere */
			const box  = new THREE.Box3().setFromObject(fbx);
			const size = box.getSize(new THREE.Vector3());
			const maxD = Math.max(size.x, size.y, size.z);
			const scale = 6 / maxD;
			fbx.scale.setScalar(scale);

			/* Center */
			const center = box.getCenter(new THREE.Vector3()).multiplyScalar(scale);
			fbx.position.sub(center);

			/* Apply halftone material to every mesh */
			const mat = makeHalftoneMaterial(resolution);
			fbx.traverse((child) => {
			if ((child as THREE.Mesh).isMesh) {
				(child as THREE.Mesh).material = mat;
			}
			});

			scene.add(fbx);
			modelRef.current = fbx;
			setLoaded(true);
		},
		undefined,
		(err) => {
			console.error('FBX load error:', err);
			setError('Could not load chainsaw model.');
		},
		);

		/* ── Find the parent section for scroll-relative rotation ── */
		if (sectionId) {
		sectionRef.current = document.getElementById(sectionId);
		}

		/* ── Scroll tracking ── */
		const progressRef = { value: 0 };
		const onScroll = () => {
		scrollRef.current = window.scrollY;

		/* Compute section scroll progress 0 → 1 */
		const section = sectionRef.current;
		if (section) {
			const rect = section.getBoundingClientRect();
			const vh = window.innerHeight;
			/* 0 when section top hits viewport bottom, 1 when section bottom hits viewport top */
			const raw = (vh - rect.top) / (vh + rect.height);
			progressRef.value = Math.max(0, Math.min(1, raw));
		}
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll(); /* initial calc */

		/* ── Render loop ── */
		const animate = () => {
		frameRef.current = requestAnimationFrame(animate);

		if (modelRef.current) {
			/* Half-arc rotation driven by section scroll progress */
			const targetY = progressRef.value * Math.PI;
			modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.08;

			/* Gentle idle tilt so it feels alive */
			modelRef.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.06;
		}

		renderer.render(scene, camera);
		};
		animate();

		/* ── Cleanup ── */
		return () => {
		cancelAnimationFrame(frameRef.current);
		window.removeEventListener('resize', resize);
		window.removeEventListener('scroll', onScroll);
		renderer.dispose();
		if (container.contains(renderer.domElement)) {
			container.removeChild(renderer.domElement);
		}
		};
	}, [makeHalftoneMaterial, sectionId]);

	return (
		<div ref={containerRef} className={className} style={{ position: 'relative' }}>
		{/* Subtle loading state */}
		{!loaded && !error && (
			<div className="absolute inset-0 flex items-center justify-center">
			<div className="h-6 w-6 rounded-full border-2 border-[#D99201]/30 border-t-[#D99201] animate-spin" />
			</div>
		)}
		{error && (
			<div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
			{error}
			</div>
		)}
		</div>
	);
}
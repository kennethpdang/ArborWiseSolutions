import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="relative w-full overflow-hidden [height:calc(100vh-var(--nav-h,64px))]">
                <video
                    className="absolute right-0 top-0 h-full w-auto object-cover"
                    src="/chainsaw-revving.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto" 
                />
			</main>
		</div>
	);
}

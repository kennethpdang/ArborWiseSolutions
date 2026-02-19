'use client';

import dynamic from 'next/dynamic';

const ChainsawScene = dynamic(() => import('@/app/components/ChainsawScene'), {
	ssr: false,
});

export default function ChainsawSceneLoader({ className, sectionId }: { className?: string; sectionId?: string }) {
	return <ChainsawScene className={className} sectionId={sectionId} />;
}
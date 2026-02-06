import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='relative w-full overflow-hidden min-h-screen'>
                <h1 className='text-intro font-bold tracking-tight'> Honesty. Integrity. Excellence. </h1>
                <video
                    className='absolute right-0 top-0 h-full w-auto object-cover'
                    src='/chainsaw-revving.mp4' 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload='auto' 
                />
				<h2> Our mission is to provide excellent tree care and service to our customers in a safe and happy environment for our team. </h2>
			</main>
		</div>
	);
}

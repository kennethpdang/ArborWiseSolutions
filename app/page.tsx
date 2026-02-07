import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='relative w-full overflow-hidden'>
				{/* Hero Video / Section 
					TODO: THE SVG TAKES TOO LONG TO LOAD AND SOMETIMES THE FALLBACK IMAGE LOADS BEFORE SVG LOADS.
				*/}
				<section className='relative min-h-[500px] h-[115vh] max-h-[1500px] overflow-hidden'>
					<Image
						src='/hero-fallback.jpg'
						alt='Fall back picture for hero-video.'
						className='object-cover'
						priority
						fill
					/>

					<Image
						src='/vine.svg'
						alt='Fall back picture for hero-video.'
						className='object-cover object-bottom'
						priority
						fill
					/>

					<div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
						<div>
							<h1 className='text-intro font-bold tracking-tight text-white'> Honesty. <br /> Integrity. <br /> Excellence. </h1>
						</div>
					</div>
				</section>
				
				<section id='mission-statement' className='min-h-[150px] h-[20vh] max-h-[1500px]'>
					<h1 className='text-mission font-bold'> Our mission is to provide excellent tree care and service to our customers in a safe and happy environment for our team. </h1>
				</section>

				<section id='services' className='min-h-[150px] h-[20vh] max-h-[1500px]'>
				</section>
			</main>
		</div>
	);
}
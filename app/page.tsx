import Image from 'next/image';
import {
	WrenchScrewdriverIcon,
	CalendarDaysIcon,
	BanknotesIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
	return (
		<main className='bg-zinc-50 font-sans dark:bg-black'>
			<section id='hero' className='flex flex-col items-center px-4'>
				<h1 className="py-10 md:py-16 text-prominent-2 md:text-prominent-1 font-bold tracking-tight text-center dark:text-white">
					An arborist company servicing the South East Houston area.
				</h1>
				<div className="relative w-full md:w-[85%] aspect-video overflow-hidden rounded-2xl md:rounded-3xl">
					<Image
						src='/hero-fallback.jpg'
						alt='Arborist team at work in South East Houston.'
						className='object-cover'
						priority
						fill
					/>
				</div>
			</section>

			<section id='stats' className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-x-24 py-12 md:py-16 px-4'>
				<div className='flex flex-col items-center gap-y-2'>
					<WrenchScrewdriverIcon className='h-8 w-8 md:h-10 md:w-10 dark:text-white' />
					<p className='text-prominent-2 font-bold dark:text-white'>50+</p>
					<p className='text-prominent-3 dark:text-white/70'>Projects</p>
				</div>
				<div className='flex flex-col items-center gap-y-2'>
					<CalendarDaysIcon className='h-8 w-8 md:h-10 md:w-10 dark:text-white' />
					<p className='text-prominent-2 font-bold dark:text-white'>7</p>
					<p className='text-prominent-3 dark:text-white/70'>Years Experience</p>
				</div>
				<div className='flex flex-col items-center gap-y-2'>
					<BanknotesIcon className='h-8 w-8 md:h-10 md:w-10 dark:text-white' />
					<p className='text-prominent-2 font-bold dark:text-white'>$200K</p>
					<p className='text-prominent-3 dark:text-white/70'>Revenue</p>
				</div>
			</section>

			<section id='mission' className='flex justify-center px-4 py-12 md:py-20'>
				<div className='w-full md:w-[85%] rounded-3xl border border-zinc-200 bg-white px-8 py-14 md:px-16 md:py-20 shadow-lg dark:border-white/10 dark:bg-white/5'>
					<p className='text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-white/40'>
						Our Mission
					</p>
					<h2 className='mt-4 text-prominent-2 md:text-prominent-1 font-bold leading-tight tracking-tight dark:text-white'>
						To provide excellent tree care and service to our customers in a safe and happy environment for our team.
					</h2>
				</div>
			</section>

			<section id='blogs' className='min-h-[150px] h-[20vh] max-h-[1500px]' />
			<section id='process' />
			<section id='values' />
		</main>
	);
}
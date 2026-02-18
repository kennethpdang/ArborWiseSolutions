import Image from 'next/image';
import Link from 'next/link';
import {
	WrenchScrewdriverIcon,
	CalendarDaysIcon,
	BanknotesIcon,
	BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

export default function Home() {
	return (
		<main className='bg-black font-sans'>
			<section id='hero' className='flex flex-col items-center px-4 mt-14'>
				<h1 className="mt-4 md:mt-6 py-4 md:py-6 text-center text-prominent-2 md:text-prominent-1 font-bold tracking-tight leading-[1.05] bg-gradient-to-r from-[#58761B] via-[#D99201] to-[#905A01] bg-clip-text text-transparent">
					An arborist company servicing the South East Houston area.
				</h1>
				<h2 className="my-4 md:my-5 text-center text-prominent-3 md:text-prominent-2 font-semibold tracking-tight leading-tight text-[#CFE3B5]">
					Excellence. Integrity. Honesty.
				</h2>
				<div className="mt-2 mb-6 md:mb-8 flex flex-wrap justify-center gap-3">
					<Link href="/quote" className="inline-flex items-center justify-center rounded-full border border-[#58761B]/70 bg-[#0B140D]/60 px-6 py-3 text-sm md:text-base font-semibold text-[#CFE3B5] shadow-sm backdrop-blur transition hover:border-[#58761B] hover:bg-[#0B140D]/80 hover:text-white hover:shadow-[0_0_0_3px_rgba(88,118,27,0.18)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58761B] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
						Schedule Estimate
					</Link>
					<Link href="/market" className="inline-flex items-center gap-2 justify-center rounded-full border border-[#D99201]/70 bg-[#1A1000]/60 px-6 py-3 text-sm md:text-base font-semibold text-[#F5D580] shadow-sm backdrop-blur transition hover:border-[#D99201] hover:bg-[#1A1000]/80 hover:text-white hover:shadow-[0_0_0_3px_rgba(217,146,1,0.18)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99201] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
						<BuildingStorefrontIcon className="h-5 w-5" />
						Market
					</Link>
				</div>
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
					<WrenchScrewdriverIcon className='h-8 w-8 md:h-10 md:w-10 text-white' />
					<p className='text-prominent-2 font-bold text-white'>50+</p>
					<p className='text-prominent-3 text-white/70'>Projects</p>
				</div>
				<div className='flex flex-col items-center gap-y-2'>
					<CalendarDaysIcon className='h-8 w-8 md:h-10 md:w-10 text-white' />
					<p className='text-prominent-2 font-bold text-white'>7</p>
					<p className='text-prominent-3 text-white/70'>Years Experience</p>
				</div>
				<div className='flex flex-col items-center gap-y-2'>
					<BanknotesIcon className='h-8 w-8 md:h-10 md:w-10 text-white' />
					<p className='text-prominent-2 font-bold text-white'>$200K</p>
					<p className='text-prominent-3 text-white/70'>Revenue</p>
				</div>
			</section>

			<section id='mission' className='flex justify-center px-4 py-12 md:py-20'>
				<div className='w-full md:w-[85%] rounded-3xl border border-white/10 bg-white/5 px-8 py-14 md:px-16 md:py-20 shadow-lg'>
					<p className='text-sm font-semibold uppercase tracking-widest text-white/40'>
						Our Mission
					</p>
					<h3 className='mt-4 text-prominent-3 md:text-prominent-3 font-bold leading-tight tracking-tight text-white'>
						To provide excellent tree care and service to our customers in a safe and happy environment for our team.
					</h3>
				</div>
			</section>

			<section id='blogs' className='px-4 py-12 md:py-20'>
				<div className='mx-auto w-full md:w-[85%]'>
					<p className='text-sm font-semibold uppercase tracking-widest text-white/40'>
						From the Blog
					</p>
					<h3 className='mt-4 mb-10 text-prominent-3 md:text-prominent-2 font-bold tracking-tight text-white'>
						Latest Updates
					</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{[
							{
								src: '/blog-image-six.png',
								title: 'The Importance of Seasonal Tree Pruning',
								excerpt:
									'Learn why pruning your trees at the right time of year makes all the difference for their health and longevity.',
							},
							{
								src: '/blog-image-two.png',
								title: 'Storm Damage Prevention Tips',
								excerpt:
									'How proactive tree care can protect your property during Houston\'s unpredictable storm season.',
							},
							{
								src: '/blog-image-five.png',
								title: 'Choosing the Right Trees for Your Yard',
								excerpt:
									'A guide to selecting species that thrive in the South East Houston climate and soil.',
							},
						].map((blog) => (
							<Link
								key={blog.title}
								href='#'
								className='group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#58761B]/50 hover:bg-white/[0.07]'
							>
								<div className='relative aspect-[16/10] w-full overflow-hidden'>
									<Image
										src={blog.src}
										alt={blog.title}
										fill
										className='object-cover transition duration-300 group-hover:scale-105'
									/>
								</div>
								<div className='flex flex-1 flex-col gap-2 px-5 py-5'>
									<h4 className='text-base md:text-lg font-semibold leading-snug text-white group-hover:text-[#CFE3B5] transition'>
										{blog.title}
									</h4>
									<p className='text-sm leading-relaxed text-white/50'>
										{blog.excerpt}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section id='process' />
			<section id='values' />
			<section id='testimonials' />
			{/* Maybe include disclaimer about filtered testimonials. */}
			<section id='' />
		</main>
	);
}
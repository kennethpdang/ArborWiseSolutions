import Image from 'next/image';
import Link from 'next/link';
import ChainsawScene from '@/app/components/ChainsawSceneLoader';
import {
	WrenchScrewdriverIcon,
	CalendarDaysIcon,
	BanknotesIcon,
	BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const testimonials = [
	{
		name: 'Marcus T.',
		location: 'Pearland, TX',
		text: 'They removed a massive dead oak that two other companies refused to touch. Clean work, fair price, and done in half the time I expected.',
	},
	{
		name: 'Sandra & Jim W.',
		location: 'Friendswood, TX',
		text: 'Our backyard looks completely different. The crew was polite, careful around our fence, and left the yard spotless.',
	},
	{
		name: 'David R.',
		location: 'League City, TX',
		text: 'Ive used them three times now â€" pruning, stump grinding, and emergency storm cleanup. Consistent quality every single time.',
	},
	{
		name: 'Angela M.',
		location: 'Pasadena, TX',
		text: 'Called on a Monday, got an estimate Tuesday, work done Thursday. That kind of responsiveness is rare. Highly recommend.',
	},
	{
		name: 'Carlos G.',
		location: 'Deer Park, TX',
		text: 'They talked me out of removing a tree that just needed proper trimming. Saved me money and the tree looks great. Real integrity.',
	},
	{
		name: 'Patricia L.',
		location: 'South Houston, TX',
		text: 'After Hurricane Beryl, they were one of the only crews answering phones. Came out within 48 hours and handled everything.',
	},
];

const values = [
	{
		title: 'Safety First',
		description:
			'Every job starts with a safety plan. Our crew follows ISA standards and uses professional-grade gear — because cutting corners puts people at risk.',
	},
	{
		title: 'Honest Pricing',
		description:
			'We quote what the job actually costs. No hidden fees, no upsells, no surprise line items after the work is done.',
	},
	{
		title: 'Quality Craftsmanship',
		description:
			'Trees are living things that deserve skilled hands. We prune with purpose, remove with precision, and leave your property cleaner than we found it.',
	},
	{
		title: 'Community Roots',
		description:
			'We live in the neighborhoods we serve. South East Houston is home — and we treat every yard like our own.',
	},
];

function TestimonialCard({ name, location, text }: { name: string; location: string; text: string }) {
	return (
		<div className='flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl border border-white/10 bg-white/5 px-6 py-6'>
			<p className='text-sm md:text-[15px] leading-relaxed text-white/60'>
				&ldquo;{text}&rdquo;
			</p>
			<div className='mt-4 flex items-center gap-3'>
				<div className='h-8 w-8 rounded-full bg-[#58761B]/30 flex items-center justify-center'>
					<span className='text-xs font-bold text-[#CFE3B5]'>{name.charAt(0)}</span>
				</div>
				<div>
					<p className='text-sm font-semibold text-white'>{name}</p>
					<p className='text-xs text-white/40'>{location}</p>
				</div>
			</div>
		</div>
	);
}

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

			<section id='testimonials' className='py-12 md:py-20'>
				<div className='mx-auto w-full md:w-[85%] px-4 mb-10'>
					<p className='text-sm font-semibold uppercase tracking-widest text-white/40'>
						Testimonials
					</p>
					<h3 className='mt-4 text-prominent-3 md:text-prominent-2 font-bold tracking-tight text-white'>
						What Our Customers Say
					</h3>
					<details className='mt-4 group'>
						<summary className='inline-flex cursor-pointer items-center gap-1.5 text-sm text-white/40 transition hover:text-white/60 list-none [&::-webkit-details-marker]:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='h-4 w-4 transition-transform group-open:rotate-180'
							>
								<path
									fillRule='evenodd'
									d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
									clipRule='evenodd'
								/>
							</svg>
							Disclaimer
						</summary>
						<p className='mt-2 max-w-prose text-sm leading-relaxed text-white/40'>
							As Christians, we don&apos;t want to be deceitful. These are pulled in with an API from our Google listings and we&apos;ve hand-selected the best ones. To see a full list, view our{' '}
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='underline underline-offset-2 text-white/60 transition hover:text-white'
							>
								Google listing
							</a>.
						</p>
					</details>
				</div>

				{/* Marquee container with edge fade masks */}
				<div
					className='relative overflow-hidden'
					style={{
						maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
						WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
					}}
				>
					{/* Sliding track — duplicated for seamless loop */}
					<div className='flex gap-5 animate-marquee w-max'>
						{[...testimonials, ...testimonials].map((t, i) => (
							<TestimonialCard key={`${t.name}-${i}`} {...t} />
						))}
					</div>
				</div>
			</section>

			{/* ────────── VALUES + HALFTONE CHAINSAW ────────── */}
			<section id='values' className='relative px-4 py-20 md:py-32 overflow-hidden'>
				{/* Chainsaw — full-bleed background filling the entire section */}
				<div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
					<div className='absolute inset-0 bg-[#D99201]/[0.03] blur-3xl' />
					<ChainsawScene className='absolute inset-0 w-full h-full' sectionId='values' />
				</div>

				{/* Text content — sits on top */}
				<div className='mx-auto w-full md:w-[85%] relative z-10'>
					<div className='ml-auto max-w-xl'>
					<p className='text-sm font-semibold uppercase tracking-widest text-white/40'>
						{'{ Our Values }'}
					</p>
					<h3 className='mt-4 mb-10 text-prominent-3 md:text-prominent-2 font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]'>
						What We Stand For
					</h3>

					<div className='space-y-6'>
						{values.map((v, i) => (
							<div key={v.title} className='group flex gap-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/[0.06] px-5 py-5'>
								{/* Index pill */}
								<span className='mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#D99201]/40 text-xs font-bold text-[#D99201]'>
									{String(i + 1).padStart(2, '0')}
								</span>
								<div>
									<h4 className='text-base md:text-lg font-semibold text-white'>
										{v.title}
									</h4>
									<p className='mt-1.5 text-sm leading-relaxed text-white/50'>
										{v.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
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
		</main>
	);
}
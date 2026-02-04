import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
	return (
		<header className='w-full px-6 py-3'>
			<div className='relative flex items-center'>
				<Link href='/' className='shrink-0'>
					<Image 
						src='/arbor-wise-solutions-logo.png'
						width={600}
						height={600}
						className='h-15 w-15 object-contain'
						alt='Arbor Wise Solutions Logo and Home Page.'
					/>
				</Link>
				
				<Image
                    src='/arbor-wise-solutions-wordmark.svg'
                    width={1156}
                    height={354}
                    className='h-15 w-auto object-contain pointer-events-none absolute left-1/2 -translate-x-1/2'
                    alt='Arbor Wise Solutions'
                    priority
                />

				<nav className='ml-auto flex items-center gap-4'>
					<Link href='/about' className='text-sm hover:underline'>
						Blogs
					</Link>
                    <Link href='/services' className='text-sm hover:underline'>
                        Services
                    </Link>
                    <Link href='/qoute' className='text-sm hover:underline'>
                        Qoute
                    </Link>
                    <Link href='/about-us' className='text-sm hover:underline'>
                        About Us
                    </Link>
				</nav>
			</div>
		</header>
	)
};
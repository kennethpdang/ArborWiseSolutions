import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
	return (
		<header className='w-full px-6 py-3'>
			<div className='flex items-center justify-between'>
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
                    className='h-15 w-auto object-contain'
                    alt='Arbor Wise Solutions'
                    priority
                />

				<nav className='flex items-center gap-4'>
					<Link href='/about' className='text-sm hover:underline'>
						About
					</Link>
				</nav>
			</div>
		</header>
	)
};
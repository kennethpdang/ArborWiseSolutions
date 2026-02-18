import Image from 'next/image';
import Link from 'next/link';
import DesktopNav from '@/app/ui/common/navigation/DesktopNav';
import MobileNav from '@/app/ui/common/navigation/MobileNav';

export default function NavigationBar() {
	return (
		<header className='fixed top-0 left-0 z-50 h-14 w-full px-6 py-2 dark:bg-black'>
			<div className='relative flex items-center'>
				<Link href='/' className='shrink-0'>
					<Image 
						src='/arbor-wise-solutions-logo.png'
						width={600}
						height={600}
						className='h-10 w-10 object-contain'
						alt='Arbor1 Wise Solutions Logo and Home Page.'
					/>
				</Link>
				
				<Image
					src='/arbor-wise-solutions-wordmark.svg'
					width={1156}
					height={354}
					className='h-10 w-auto object-contain pointer-events-none absolute left-1/2 -translate-x-1/2'
					alt='Arbor Wise Solutions'
					priority
				/>

				<MobileNav className='ml-auto flex xl:hidden' />
				<DesktopNav className='hidden xl:flex ml-auto' />
			</div>
		</header>
	)
};
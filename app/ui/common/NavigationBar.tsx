import Image from 'next/image';
import Link from 'next/link';
import { ChatBubbleBottomCenterIcon, TruckIcon, CalculatorIcon, UserGroupIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";

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
					<Link href='/blogs' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
						<ChatBubbleBottomCenterIcon className='shrink-0 h-5 w-5'/>
						Blogs
					</Link>
					<Link href='/services' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
						<TruckIcon className='shrink-0 h-5 w-5'/>
						Services
					</Link>
					<Link href='/qoute' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
						<CalculatorIcon className='shrink-0 h-5 w-5'/>
						Qoute
					</Link>
					<Link href='/about-us' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
						<UserGroupIcon className='shrink-0 h-5 w-5'/>
						About Us
					</Link>
					<Link href='/store' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
						<ShoppingBagIcon className='shrink-0 h-5 w-5'/>
						Store
					</Link>
				</nav>
			</div>
		</header>
	)
};
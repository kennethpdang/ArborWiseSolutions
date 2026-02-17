import Link from 'next/link';
import { ChatBubbleBottomCenterIcon, TruckIcon, CalculatorIcon, UserGroupIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";

export default function DesktopNav({ className }: {className?: string}) {
	return(
		<nav className={`ml-auto flex items-center gap-4 ${className}`}>
			<Link href='/blogs' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
				<ChatBubbleBottomCenterIcon className='shrink-0 h-5 w-5'/>
				Blogs
			</Link>
			<Link href='/services' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
				<TruckIcon className='shrink-0 h-5 w-5'/>
				Services
			</Link>
			<Link href='/quote' className='inline-flex whitespace-nowrap text-white items-center gap-2 text-sm hover:underline'>
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
	);
};
'use client';

import Link from 'next/link';
import { XMarkIcon, Bars3Icon, ChatBubbleBottomCenterIcon, TruckIcon, CalculatorIcon, UserGroupIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";
import { useState } from 'react';

const links = [
	{ href: '/blogs', label: 'Blogs', icon: ChatBubbleBottomCenterIcon },
	{ href: '/services', label: 'Services', icon: TruckIcon },
	{ href: '/qoute', label: 'Quote', icon: CalculatorIcon },
	{ href: '/about-us', label: 'About Us', icon: UserGroupIcon },
	{ href: '/store', label: 'Store', icon: ShoppingBagIcon }
];

export default function MobileNav({ className }: {className?: string}) {
	const [isOpen, setIsOpen] = useState(false);

	return(
		<div className={className}>
			<button onClick={() => setIsOpen(true)} aria-label='Open Menu'>
				<Bars3Icon className='shrink-0 h-5 w-5' />
			</button>

			{isOpen && (
				<div className="fixed inset-0 z-50 flex flex-col bg-black/95">
					<div className="flex justify-end px-6 py-2">
						<button onClick={() => setIsOpen(false)} aria-label="Close menu">
							<XMarkIcon className="h-8 w-8 text-white" />
						</button>
					</div>

					<nav className="flex flex-1 flex-col items-center justify-center gap-8">
						{links.map(({ href, label, icon: Icon }) => (
							<Link
								key={href}
								href={href}
								onClick={() => setIsOpen(false)}
								className="inline-flex items-center gap-3 text-2xl text-white hover:underline"
							>
								<Icon className="h-7 w-7" />
								{label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</div>
	);
};
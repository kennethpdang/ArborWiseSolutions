import Image from 'next/image';
import Link from 'next/link';
import {
	WrenchScrewdriverIcon,
	CalendarDaysIcon,
	BanknotesIcon,
	BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

export default function Page() {
	return (
		<main className='bg-black font-sans'>
			<section id='form' className='flex flex-col items-center px-4 mt-14'>
				<Image
					src='/process.svg'
					alt='The process from filling out this form to finishing the work at the job site.'
					className=''
					priority
					fill
				/>
			</section>
		</main>
	);
}
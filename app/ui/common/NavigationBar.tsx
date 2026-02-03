import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
    return (
        <header>
            <Image 
                src="/hero-desktop.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version."
            />
            
            <h1> Arbor Wise Solutions </h1>
        </header>
    )
};
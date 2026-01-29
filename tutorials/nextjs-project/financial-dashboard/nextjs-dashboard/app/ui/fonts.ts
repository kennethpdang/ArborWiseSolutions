import { Inter, Lusitana } from 'next/font/google';
 
const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
});

export { inter, lusitana };

// What makes Next.js unique is that it hosts them along with other static assets at build time, meaning that there are no delays/shifting of elements with custom fonts.
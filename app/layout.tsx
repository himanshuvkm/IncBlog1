import { Work_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
// @ts-ignore: CSS module import without type declarations
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>{children}</body>
    </html>
  );
}

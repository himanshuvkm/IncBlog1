import { Work_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <Navbar /> {/* Make sure Navbar is 'use client' if it has state or window */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

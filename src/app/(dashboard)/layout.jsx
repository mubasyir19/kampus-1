import SidebarDash from '@/components/SidebarDash';
import '../globals.css';
import React from 'react';
import { Montserrat } from 'next/font/google';
import NavbarDash from '@/components/organism/NavbarDash';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: '',
  description: '',
};

export default function DashboardLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`flex h-screen ${montserrat.className}`}>
        <SidebarDash />
        <div className='flex flex-1 flex-col'>
          <NavbarDash />
          <main className='flex-1 bg-[#F4F7FE] p-6'>{children}</main>
          {/* <FooterDash /> */}
        </div>
      </body>
    </html>
  );
}

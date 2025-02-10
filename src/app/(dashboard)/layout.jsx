import '../globals.css';
import React from 'react';

export const metadata = {
  title: '',
  description: '',
};

export default function DashboardLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`flex h-screen`}>
        {/* <SidebarDash /> */}
        <div className='flex flex-1 flex-col'>
          {/* <NavbarDash /> */}
          <main className='flex-1 bg-gray-200 p-6'>{children}</main>
          {/* <FooterDash /> */}
        </div>
      </body>
    </html>
  );
}

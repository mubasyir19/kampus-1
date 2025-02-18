import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

export default function NavbarDash() {
  return (
    <nav className='px-6 py-4 flex items-center justify-between shadow-xl'>
      <button>
        <Bars3Icon className='h-5 w-5 text-gray-500' />
      </button>
      <div className='flex items-center gap-x-3'>
        <button className='flex items-center gap-x-2'>
          <p className='text-base text-black font-medium'>Mahdy</p>
          <div className='w-7 h-7 bg-gray-500 rounded-full'></div>
          {/* <Image src={`#`} width={200} height={200} alt='profile' className='h-8 w-8 rounded-full' /> */}
        </button>
      </div>
    </nav>
  );
}

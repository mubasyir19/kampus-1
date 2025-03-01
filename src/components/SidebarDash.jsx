'use client';

import Link from 'next/link';
import React from 'react';
import { HomeIcon, DocumentArrowUpIcon, UsersIcon, CubeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function SidebarDash() {
  const pathname = usePathname();

  return (
    <aside className='hidden md:block lg:w-56 xl:w-64 h-full overflow-y-auto bg-black pt-6'>
      <div className=''>
        <h1 className='text-center font-bold text-2xl text-green-400'>KampusKu</h1>
      </div>
      <ul className='mt-10 flex flex-col gap-y-2'>
        <li
          className={`w-full px-4 py-2 border-r-4 ${
            pathname === '/dashboard' ? 'border-green-400 text-green-400' : 'border-transparent text-gray-500'
          } `}
        >
          <Link href={`/dashboard`} className='flex items-center gap-x-3'>
            <HomeIcon className='h-5 w-5 ' />
            <span className='font-semibold'>Dashboard</span>
          </Link>
        </li>
        <li className={`w-full px-4 py-2`}>
          <p className='text-gray-400 font-semibold text-sm'>Organization</p>
        </li>
        <li
          className={`w-full px-4 py-2 border-r-4 ${
            pathname === '/dashboard/profile' ? 'border-green-400 text-green-400' : 'border-transparent text-gray-500'
          }`}
        >
          <Link href={`/dashboard/profile`} className='flex items-center gap-x-3'>
            <UserGroupIcon className='h-5 w-5' />
            <span className='font-semibold'>Profile</span>
          </Link>
        </li>
        <li
          className={`w-full px-4 py-2 border-r-4 ${
            pathname === '/dashboard/management'
              ? 'border-green-400 text-green-400'
              : 'border-transparent text-gray-500'
          }`}
        >
          <Link href={`/dashboard/management`} className='flex items-center gap-x-3'>
            <UsersIcon className='h-5 w-5' />
            <span className='font-semibold'>Management</span>
          </Link>
        </li>
        <li className={`w-full px-4 py-2`}>
          <p className='text-gray-400 font-semibold text-sm'>Blog</p>
        </li>
        <li className={`w-full px-4 py-2 border-r-4 border-transparent`}>
          <Link href={`#`} className='flex items-center gap-x-3'>
            <DocumentArrowUpIcon className='h-5 w-5 text-gray-500' />
            <span className='text-gray-500 font-semibold'>Article</span>
          </Link>
        </li>
        <li className={`w-full px-4 py-2 border-r-4 border-transparent`}>
          <Link href={`#`} className='flex items-center gap-x-3'>
            <CubeIcon className='h-5 w-5 text-gray-500' />
            <span className='text-gray-500 font-semibold'>Inventory</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

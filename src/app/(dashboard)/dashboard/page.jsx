import Header from '@/components/organism/Header';
import React from 'react';
import { UsersIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

export default function DashboardPage() {
  return (
    <>
      <Header title={`Main Dashboard`} />
      <section className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-2'>
        <div className='bg-black px-6 py-4 rounded-xl flex gap-x-5 items-center justify-between'>
          <UsersIcon className='h-8 w-8 text-white' />
          <div className=''>
            <p className='text-gray-400 text-sm font-semibold'>Pengurus</p>
            <p className='text-3xl text-green-400 font-semibold'>20</p>
          </div>
        </div>
        <div className='bg-black px-6 py-4 rounded-xl flex gap-x-5 items-center justify-between'>
          <DocumentTextIcon className='h-8 w-8 text-white' />
          <div className=''>
            <p className='text-gray-400 text-sm font-semibold'>Artikel</p>
            <p className='text-3xl text-green-400 font-semibold'>5</p>
          </div>
        </div>
        <div className='bg-black px-6 py-4 rounded-xl flex gap-x-5 items-center justify-between'>
          <UsersIcon className='h-8 w-8 text-white' />
          <div className=''>
            <p className='text-gray-400 text-sm font-semibold'>Pengurus</p>
            <p className='text-3xl text-green-400 font-semibold'>20</p>
          </div>
        </div>
        <div className='bg-black px-6 py-4 rounded-xl flex gap-x-5 items-center justify-between'>
          <UsersIcon className='h-8 w-8 text-white' />
          <div className=''>
            <p className='text-gray-400 text-sm font-semibold'>Pengurus</p>
            <p className='text-3xl text-green-400 font-semibold'>20</p>
          </div>
        </div>
      </section>
    </>
  );
}

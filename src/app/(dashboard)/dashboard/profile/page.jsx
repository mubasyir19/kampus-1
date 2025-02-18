import Header from '@/components/organism/Header';
import React from 'react';

export default function ProfileOrganizationPage() {
  return (
    <>
      <Header title={`Profile Organization`} />
      <section className='mt-10'>
        <form className='flex flex-col gap-y-4'>
          <div className=''>
            <label className='block text-base font-medium text-black'>Organization Name</label>
            <input
              type='text'
              placeholder='Your organization'
              className='mt-1 px-4 py-2 rounded-lg w-1/2 border border-neutral-200 focus:outline-none focus:border-green-400'
            />
          </div>
          <div className=''>
            <label className='block text-base font-medium text-black'>Cohort</label>
            <input
              type='text'
              placeholder='cohort/kabinet/angkatan'
              className='mt-1 px-4 py-2 rounded-lg w-1/2 border border-neutral-200 focus:outline-none focus:border-green-400'
            />
          </div>
          <div className=''>
            <label className='block text-base font-medium text-black'>Organization Vision</label>
            <textarea
              type='text'
              rows={3}
              placeholder='Your vision'
              className='mt-1 px-4 py-2 rounded-lg w-1/2 border border-neutral-200 focus:outline-none focus:border-green-400'
            ></textarea>
          </div>
          <div className=''>
            <label className='block text-base font-medium text-black'>Organization Missions</label>
            <input
              type='text'
              placeholder='Your organization'
              className='mt-1 px-4 py-2 rounded-lg w-1/2 border border-neutral-200 focus:outline-none focus:border-green-400'
            />
          </div>
        </form>
      </section>
    </>
  );
}

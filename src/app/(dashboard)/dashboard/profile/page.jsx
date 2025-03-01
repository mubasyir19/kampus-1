'use client';

import Header from '@/components/organism/Header';
import React, { useState } from 'react';

export default function ProfileOrganizationPage() {
  const [missions, setMissions] = useState(['']);

  const addMissionField = (e) => {
    e.preventDefault();
    setMissions([...missions, '']);
  };

  const handleChange = (index, value) => {
    const newMissions = [...missions];
    newMissions[index] = value;
    setMissions(newMissions);
  };

  const removeMissionField = (index) => {
    const newMissions = missions.filter((_, i) => i !== index);
    setMissions(newMissions);
  };

  return (
    <>
      <Header title={`Profile Organization`} />
      <section className='mt-10 grid grid-cols-2 gap-x-5'>
        <form className='flex flex-col gap-y-4'>
          <div className=''>
            <label className='block text-base font-medium text-black'>Organization Name</label>
            <input
              type='text'
              placeholder='Your organization'
              className='mt-1 px-4 py-2 rounded-lg w-full border border-neutral-200 focus:outline-none focus:border-green-400'
            />
          </div>
          <div className=''>
            <label className='block text-base font-medium text-black'>University</label>
            <input
              type='text'
              placeholder='University'
              className='mt-1 px-4 py-2 rounded-lg w-full border border-neutral-200 focus:outline-none focus:border-green-400'
            />
          </div>
          <div className=''>
            <label className='block text-base font-medium text-black'>Cohort</label>
            <input
              type='text'
              placeholder='cohort/kabinet/angkatan'
              className='mt-1 px-4 py-2 rounded-lg w-full border border-neutral-200 focus:outline-none focus:border-green-400'
            />
          </div>
          <div className=''>
            <label className='block text-base font-medium text-black'>Organization Vision</label>
            <textarea
              type='text'
              rows={3}
              placeholder='Your vision'
              className='mt-1 px-4 py-2 rounded-lg w-full border border-neutral-200 focus:outline-none focus:border-green-400'
            ></textarea>
          </div>
          <div className=''>
            <div className='w-full flex items-center justify-between'>
              <label className='block text-base font-medium text-black'>Organization Missions</label>
              <button onClick={addMissionField} className='flex items-center gap-2'>
                <span className='flex items-center justify-center bg-green-400 h-4 w-4 rounded-full text-white text-base'>
                  +
                </span>
                <span className='text-sm text-black'>Tambah</span>
              </button>
            </div>
            {missions.map((mission, index) => (
              <input
                key={index}
                type='text'
                placeholder='Your organization'
                value={mission}
                onChange={(e) => handleChange(index, e.target.value)}
                className='mt-1 px-4 py-2 rounded-lg w-full border border-neutral-200 focus:outline-none focus:border-green-400 block'
              />
            ))}
            {/* <input
              type='text'
              placeholder='Your organization'
              className='mt-1 px-4 py-2 rounded-lg w-full border border-neutral-200 focus:outline-none focus:border-green-400'
            /> */}
          </div>
          <div className=''>
            <button className='rounded-lg bg-green-400 text-white py-2 font-medium text-base text-center w-1/2 hover:bg-green-500 duration-75'>
              Submit
            </button>
          </div>
        </form>
        <div className=''>
          <label className='block text-base font-medium text-black'>Organization Logo</label>
          <div className='mt-2 flex items-center justify-center w-full'>
            <label
              htmlFor='dropzone-file'
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
            >
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
                  className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 16'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                  />
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>Click to upload</span> or drag and drop
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id='dropzone-file' type='file' className='hidden' />
            </label>
          </div>
        </div>
      </section>
    </>
  );
}

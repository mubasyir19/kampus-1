import CardInfo from '@/components/molecules/CardInfo';
import React from 'react';

export default function StudentInfoPage() {
  return (
    <>
      <section className='h-96 w-full flex flex-col items-center justify-center text-center bg-gradient-to-tr from-black via-black to-green-400'>
        <h1 className='text-4xl text-white font-bold'>Student Info</h1>
        <p className='text-xl text-white'>Seputar Mahasiswa dan Kampus</p>
      </section>
      <section className='container mx-auto py-20'>
        <div className='grid grid-cols-3 gap-10'>
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </section>
    </>
  );
}

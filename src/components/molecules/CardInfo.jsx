import Image from 'next/image';
import React from 'react';

export default function CardInfo() {
  return (
    <div className='p-2 border border-gray-300 hover:border-green-400 rounded-2xl'>
      <div className='h-80 w-full bg-kampus bg-cover bg-right rounded-xl'>
        <div className='w-full h-full  bg-gradient-to-tr from-cyan-700/80 to-green-700/80 rounded-xl flex flex-col items-center'></div>
      </div>
      <div className='flex items-center gap-x-4 my-2'>
        <p className='text-gray-400 text-sm'>AdminWeb</p>
        <p className='text-gray-400 text-sm'>March 25, 2025</p>
        <p className='text-gray-400 text-sm'>Beasiswa</p>
      </div>
      <div className='mt-3'>
        <h3 className='font-bold text-2xl text-black'>[INFO BEASISWA]</h3>
        <p className='mt-4 text-gray-400 text-base'>
          Selamat siang, FEB UI! Adkesma kembali hadir membawa info beasiswa nih! Saat ini sedang ada...
        </p>
      </div>
    </div>
  );
}

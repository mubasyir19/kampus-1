import React from 'react';
import Breadcrumbs from '../molecules/Breadcrumbs';

export default function Header({ title, subtitle }) {
  return (
    <section className='mt-3 w-full flex justify-between'>
      <div className=''>
        <h2 className='text-lg lg:text-2xl font-bold text-black'>{title}</h2>
        <p className='text-gray-600'>{subtitle}</p>
      </div>
      <Breadcrumbs />
    </section>
  );
}

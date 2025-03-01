import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='fixed w-full py-6 px-10 flex items-center justify-between border-b border-white'>
      <div className=''>
        <h2 className='text-2xl text-white'>KampusKu</h2>
      </div>
      <ul className='flex items-center gap-x-7'>
        <li>
          <Link href='/' className='text-base text-white font-semibold'>
            Beranda
          </Link>
        </li>
        <li>
          <Link href='/tentang' className='text-base text-white font-semibold'>
            Tentang
          </Link>
        </li>
        <li>
          <Link href='/student-info' className='text-base text-white font-semibold'>
            Student Info
          </Link>
        </li>
        <li>
          <Link href='#' className='text-base text-white font-semibold'>
            Article
          </Link>
        </li>
        <li>
          <Link href='#' className='text-base text-white font-semibold'>
            Kontak
          </Link>
        </li>
        <li>
          <Link href='/faq' className='text-base text-white font-semibold'>
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href='/login'
            className='px-4 py-2 rounded-full border-2 border-green-400 bg-black text-base text-green-400 font-semibold'
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

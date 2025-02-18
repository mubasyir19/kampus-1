'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <nav aria-label='breadcrumb' className='my-auto'>
      <ol className='flex gap-x-1 text-gray-600 text-sm'>
        <li>
          <Link href='/dashboard' className='hover:text-secondary-blue'>
            Pages
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');
          const isLast = index === pathArray.length - 1;
          return (
            <li key={index} className='flex items-center'>
              <span className='mx-1'>/</span>
              {isLast ? (
                <span className='text-gray-500'>{path.replace(/-/g, ' ')}</span>
              ) : (
                <Link href={href} className='hover:text-secondary-blue'>
                  {path.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

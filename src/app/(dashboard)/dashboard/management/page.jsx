'use client';

import Header from '@/components/organism/Header';
import React from 'react';
import dynamic from 'next/dynamic';

const DataTable = dynamic(() => import('react-data-table-component'), { ssr: false });

export default function ManagementPage() {
  const columns = [
    {
      name: 'No',
      selector: (row) => row.number,
    },
    {
      name: 'Name',
      selector: (row) => row.title,
    },
    {
      name: 'Position',
      selector: (row) => row.year,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className='flex gap-2 w-full'>
          {/* Button Edit */}
          <button
            onClick={() => handleEdit(row)}
            className='px-3 py-1 text-sm w-full font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition'
          >
            Edit
          </button>
          {/* Button Delete */}
          <button
            onClick={() => handleDelete(row.id)}
            className='px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition'
          >
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowoverflow: true,
      button: 'true',
    },
  ];

  const data = [
    {
      number: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      number: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];

  return (
    <>
      <Header title={`Management (Pengurus)`} />
      <section>
        <DataTable columns={columns} data={data} pagination highlightOnHover className='rounded-lg shadow-lg' />
      </section>
    </>
  );
}

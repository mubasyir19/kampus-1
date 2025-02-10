import React from 'react';

export default function AboutPage() {
  return (
    <>
      <section className='h-screen bg-gradient-to-tr from-black via-black to-green-400 grid grid-cols-2 content-center px-24'>
        <div className=''>
          <p className='bg-green-500 text-white font-semibold rounded-full py-1 px-3 text-sm w-fit'>About us</p>
          <h1 className='mt-5 text-6xl text-white font-bold'>
            Kabinet Sinergi <br /> Muda
          </h1>
          <p className='text-white text-base mt-5'>
            BEM Universitas KampusKu didirikan pada tanggal 1 Januari 1998 di Bandung sampai dengan waktu yang tidak
            ditentukan.
          </p>
        </div>
        <div className=''></div>
      </section>
      <section className='bg-black h-full py-32'>
        <div className='mb-24'>
          <div className='bg-green-400 w-1/4 py-4 px-40'>
            <h1 className='text-4xl font-semibold text-white text-end'>Visi</h1>
          </div>
          <p className='my-16 w-1/2 mx-auto text-3xl text-center text-white'>
            Menjadi wadah aspirasi dan pengembangan potensi mahasiswa yang unggul, kreatif, dan berdaya saing global.
          </p>
        </div>
        <div className=''>
          <div className='bg-green-400 w-1/4 py-4 px-40 ml-auto'>
            <h1 className='text-4xl font-semibold text-white text-start'>Misi</h1>
          </div>
        </div>
        <div className='grid grid-cols- my-16 lg:grid-cols-4 gap-8 w-3/4 mx-auto'>
          <div className='border border-green-500 py-8 px-5 flex justify-center items-center rounded-lg'>
            <p className='text-white font-semibold'>
              Menampung dan menyalurkan aspirasi mahasiswa melalui berbagai kanal komunikasi dan forum diskusi.
            </p>
          </div>
          <div className='border border-green-500 py-8 px-5 flex justify-center items-center rounded-lg'>
            <p className='text-white font-semibold'>
              Memfasilitasi pengembangan potensi mahasiswa melalui program-program pelatihan, seminar, workshop, dan
              kegiatan ekstrakurikuler.
            </p>
          </div>
          <div className='border border-green-500 py-8 px-5 flex justify-center items-center rounded-lg'>
            <p className='text-white font-semibold'>
              Mendorong kreativitas dan inovasi mahasiswa melalui kompetisi, proyek kolaborasi, dan inkubator ide.
            </p>
          </div>
          <div className='border border-green-500 py-8 px-5 flex justify-center items-center rounded-lg'>
            <p className='text-white font-semibold'>
              Membangun jaringan kerjasama dengan pihak eksternal (perusahaan, organisasi, universitas lain) untuk
              meningkatkan daya saing lulusan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <section className='h-full w-full bg-hero bg-cover bg-center'>
        <div className='w-full h-full flex flex-col items-center justify-center text-center bg-black bg-opacity-50'>
          <h3 className='text-3xl text-white font-semibold'>Selamat Datang di Website</h3>
          <h1 className='text-4xl font-bold text-white'>
            Badan Eksekutif Mahasiswa <br /> Universitas KampusKu
          </h1>
          <hr className='border-2 my-3 border-white w-60' />
          <h4 className='text-white text-2xl'>Kabinet Sinergi Muda</h4>
        </div>
      </section>
      <section className='py-20'>
        <h2 className='text-3xl text-center text-black font-bold'>Program Kami</h2>
        <div className='grid grid-cols-3 mt-8 gap-5 px-20'>
          <div className='bg-gray-500 h-80 w-full rounded-xl'></div>
          <div className='bg-gray-200 h-80 w-full rounded-xl'></div>
          <div className='bg-gray-300 h-80 w-full rounded-xl'></div>
        </div>
      </section>
    </>
  );
}

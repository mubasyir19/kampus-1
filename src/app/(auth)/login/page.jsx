import React from 'react';

export default function LoginPage() {
  return (
    <>
      <section className='h-screen bg-gradient-to-br from-black via-black to-green-400 flex justify-center items-center'>
        <div className='w-3/4 lg:w-1/4'>
          <h2 className='text-xl font-bold text-center text-white'>Badan Eksekutif Mahasiswa Universitas KampusKu</h2>
          <form className='mt-8 flex flex-col gap-4 p-6 mx-auto rounded-lg bg-black border border-white'>
            <div className='group-input'>
              <label htmlFor='username' className='text-white text-xs'>
                Username
              </label>
              <input
                type='text'
                name='username'
                className='px-2 pt-2 w-full text-white bg-transparent border-b border-white focus:outline-none focus:border-b focus:border-green-400'
              />
            </div>
            <div className='group-input'>
              <label htmlFor='password' className='text-white text-xs'>
                Password
              </label>
              <input
                type='password'
                name='password'
                className='px-2 pt-2 w-full text-white bg-transparent border-b border-white focus:outline-none focus:border-b focus:border-green-400'
              />
            </div>
            <button
              type='submit'
              className='mt-4 w-full py-2 bg-black text-white border border-green-600 rounded-lg hover:bg-green-600'
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

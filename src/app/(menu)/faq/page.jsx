import ServiceCard from '@/components/FAQCard';
import React from 'react';

export default function FAQPage() {
  return (
    <>
      <section className='h-96 w-full flex flex-col items-center justify-center text-center bg-gradient-to-tr from-black via-black to-green-400'>
        <h1 className='text-4xl text-white font-bold'>FAQ (Frequency Ask Question)</h1>
        <p className='text-xl text-white'>Tanyakan pada Kami.</p>
      </section>
      <section className='px-6 py-14 md:px-10 lg:px-20'>
        <div className='mx-auto w-full xl:w-3/4'>
          <div className='mt-8 xl:mt-16'>
            <ServiceCard
              number='01'
              title='UI / UX Design'
              description='Our meticulously crafted UI/UX designs offer immersive experiences, ensuring users find your system intuitive and pleasant to interact with.'
            />
            <ServiceCard
              number='02'
              title='System Development'
              description='Enhance Your Business Efficiency. A tailored system can automate your business operations, improve productivity, and facilitate data-driven decision-making.'
            />
            <ServiceCard
              number='03'
              title='Digital Marketing'
              description="Acquire a larger customer base and enhance revenue. By implementing a tailored digital marketing strategy, you can elevate your brand's visibility, captivate a wider audience, and stimulate sales."
            />
          </div>
        </div>
      </section>
    </>
  );
}

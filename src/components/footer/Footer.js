import React from 'react'
import Form from './Form';
import { FcCallback } from 'react-icons/fc';
import { SiGmail } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';

function Footer() {
  return (
    <div id='contact' className='px-2 md:px-10 lg:px-28 xl:px-44 py-10 bg-gray-900'>
      <div className='py-10 border-y border-gray-100 flex flex-col md:flex-row justify-between'>
        <div className='text-white w-full pb-14 md:pb-0'>
          <div>
            <h1 className='text-3xl font-semibold'>Got an idea?</h1>
            <p className='text-xl mt-8'>Reach out to me.</p>
          </div>
          <div className='mt-14'>
            <div className='flex items-center'>
              <FcCallback className='text-blue-400' />
              <p className='ml-4'>+234 817 260 4667</p>
            </div>
            <div className='mt-10 flex items-center'>
              <SiGmail className='text-blue-400' />
              <p className='ml-4'>jefferyjohnnmose@gmail.com</p>
            </div>
            <div className='mt-10 flex items-center'>
              <ImLocation className='text-blue-400' />
              <p className='ml-4'>ibeju-lekki Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Footer;
import React from 'react'

const Desktop = ( { mode } ) => {
  return (
    <div className={"fixed z-30 w-full h-24 bg-white shadow md:px-10 lg:px-28 xl:px-44 flex items-center " + ( mode ? 'bg-gray-800 shadow-md text-white' : null )}>
        <a href='#' className='text-lg tracking-wider'>
            NMOSE JEFFERY JOHN
        </a>
        <div className='ml-auto flex items-center gap-5 lg:gap-10 tracking-wider'>
            <a href='#contact' className='transition duration-500 ease-in hover:text-yellow-600'>CONTACT ME</a>
            <a href='#work' className='transition duration-500 ease-in hover:text-yellow-600'>MY WORKS</a>
            <a href='#about' className='transition duration-500 ease-in hover:text-yellow-600'>ABOUT ME</a>
        </div>
    </div>
  )
}

export default Desktop;
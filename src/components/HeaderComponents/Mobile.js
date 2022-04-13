import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Mobile = ( { mode } ) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={"fixed z-30 w-full h-20 bg-white shadow px-2 flex items-center " + ( mode ? 'bg-gray-800 shadow-md text-white' : null )}>
        <a href='#' className='text-md tracking-wider'>
            NMOSE JEFFERY JOHN
        </a>
        <GiHamburgerMenu className='ml-auto text-2xl text-yellow-600' onClick={()=> setOpen(!open)} />
        <div className={` absolute top-28 w-full ${ open ? "left-0 duration-500" : "-left-full duration-500"}`} >
          <div className={"mx-7 py-7 flex flex-col items-center bg-gray-100 rounded-lg tracking-wider " + ( mode ? 'bg-gray-600 ' : null)}>
            <a href='#contact' className='transition duration-500 ease-in hover:text-yellow-600' onClick={()=> setOpen(false)}>CONTACT ME</a>
            <a href='#work' className='my-5 transition duration-500 ease-in hover:text-yellow-600' onClick={()=> setOpen(false)}>MY WORKS</a>
            <a href='#about' className='transition duration-500 ease-in hover:text-yellow-600' onClick={()=> setOpen(false)}>ABOUT ME</a>
          </div>
        </div>
    </div>
  )
}

export default Mobile;
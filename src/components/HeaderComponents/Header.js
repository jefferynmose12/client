import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Header = ( { mode } ) => {
  return (
    <>
      <div className='hidden md:block'>
        <Desktop mode={mode} />
      </div>
      <div className='md:hidden'>
        <Mobile mode={mode} />
      </div>
    </>
  )
}

export default Header
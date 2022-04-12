import React from 'react'
import me from '../../images/me.jpg'
import Skill from './Skill'

const About = ( { mode } ) => {
  return (
    <div id='about' className={"px-2 md:px-10 lg:px-28 xl:px-44 pt-20 md:pt-28 flex flex-col md:flex-row items-center md:items-start justify-between bg-white " + (mode ? 'bg-gray-800 text-white ' : null)}>
      <div className='relative z-20 md:w-full'>
        <img src={me} alt='me' className='p-5 lg:p-10 w-56 md:w-80 lg:w-80 h-full md:h-4/5 lg:h-4/5 xl:h-4/5' />
        <div className={"absolute top-0 h-4/5 md:h-96 lg:h-80 xl:h-80 w-44 md:w-72 lg:w-64 xl:w-60 bg-gray-100 rounded-2xl -z-30 " + ( mode ? 'bg-gray-900 opacity-50 ' : null )} />
      </div>
      <div className='py-10 md:py-0 lg:py-5 xl:py-10 w-full'>
        <h2 className='text-2xl font-bold tracking-wider'>About<span className='pl-3 text-yellow-600'>Me.</span></h2>
        <p className='py-5 md:py-3 lg:py-5 font-medium tracking-wide '>
          I am a resourceful front-end developer who brings in-depth knowledge of latest technology trends to produce clean website designs. 
          I love to create fast, intuitive, responsive and dynamic designs and implement highly interactive user interfaces for web applications. 
          Create and integrate APIs to implement functionality in web applications.
        </p>
        <div className='lg:pt-5 xl:pt-10'>
          <h2 className='text-2xl text-yellow-600 font-bold tracking-wider'>SKILLS:</h2>
          <div className='py-4 flex gap-5 flex-wrap font-medium text-white'>
            <Skill skill='React' />
            <Skill skill='HTML' />
            <Skill skill='CSS' />
            <Skill skill='TAILWIND CSS' />
            <Skill skill='JAVASCRIPT' />
            <Skill skill='GIT' />
            <Skill skill='TEAMWORK' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
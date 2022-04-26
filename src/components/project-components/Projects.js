import React from 'react'
import EachProject from './EachProject';
import { products } from '../../data'

const Projects = ( { mode } ) => {

  return (
    <div id='work' className={"px-2 md:px-10 lg:px-28 xl:px-44 pt-28 pb-10 bg-white w-full " + ( mode ? 'bg-gray-800 text-white' : null)}>
      <h2 className='tracking-wider'>FEATURED PROJECTS</h2>
      <h1 className={"py-7 text-4xl lg:text-6xl tracking-wider text-gray-200 font-medium " + ( mode ? 'text-gray-700 ' : null)}>VIEW PROJECTS</h1>
      <div className='my-5 lg:my-10 grid gap-10 md:gap-10 grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full'>
        {
          products.map(item => (
            <EachProject key={item.id} img={item.img} link={item.link} />
          ))
        }
      </div>
    </div>
  )
};

export default Projects;
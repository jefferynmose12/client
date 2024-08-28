import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const EachProject = ({img, link}) => {
  
  useEffect(() => {
    AOS.init({duration : 2000});
  }, [])
  
  return (
    <div 
      data-aos="fade-up"
      className=' md:w-full h-[30vh] md:h-[30vh] xl:h-[40vh] shadow border-2 border-gray-100 overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
        <div className='px-2 sticky z-20  bg-gray-100 w-full h-7 flex gap-2 items-center'>
            <div className='h-2 w-2 rounded-full bg-yellow-500'/>
            <div className='h-2 w-2 rounded-full bg-blue-500'/>
            <div className='h-2 w-2 rounded-full bg-red-500'/>
        </div>
        <a href={link} target="_blank" rel='noreferrer'>
          <img src={require (`../../images/${img}.png`)} alt={img} className='overflow-hidden w-100 transition duration-1000 ease-in hover:-translate-y-2/3' />
        </a>
    </div>
  )
}

export default EachProject;
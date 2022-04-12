import React, {useEffect} from 'react'
import gaged from '../../images/gaged.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const EachContribution = () => {

  useEffect(() => {
    AOS.init({duration : 1000});
  }, []);

  return (
    <div data-aos="fade-down" className='md:w-96 h-[30vh] md:h-[30vh] xl:h-[40vh] shadow border-2 border-gray-100 overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
        <div className='px-2 sticky z-20  bg-gray-100 w-full h-7 flex gap-2 items-center'>
            <div className='h-2 w-2 rounded-full bg-white'/>
            <div className='h-2 w-2 rounded-full bg-white'/>
            <div className='h-2 w-2 rounded-full bg-white'/>
        </div>
        <a href='http://gaged.io' target="_blank" rel='noreferrer'>
          <img src={gaged} alt='gaged' className='overflow-hidden w-100 transition transition duration-1000 ease-in hover:-translate-y-2/3' />
        </a>
    </div>
  )
}

export default EachContribution;
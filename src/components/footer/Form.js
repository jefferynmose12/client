import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Form = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_om26zua', 'template_07534hf', form.current, 'IweMYt_Y9gNVESrqD')
      .than((result) => {
        setDone(!done)
        console.log(result);
      }, (error) => {
        console.log(error);
      }
    );
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-start w-full'>
      <input 
        className='pl-3 border-b border-gray-100 bg-transparent text-gray-100 outline-none h-12 w-2/3' 
        placeholder='Name' 
        name='user_name' 
      />
      <input 
        className='pl-3 mt-5 border-b border-gray-100 bg-transparent text-gray-100 outline-none h-12 w-2/3' 
        placeholder='Subject' 
        name='user_subject' 
      />
      <input 
        className='pl-3 mt-5 border-b border-gray-100 bg-transparent text-gray-100 outline-none h-12 w-2/3' 
        placeholder='Email' 
        name='user_email'
      />
      <textarea 
        className='p-3 mt-8 border border-gray-100 bg-transparent rounded-md text-gray-100 outline-none h-1/2 w-full' 
        rows='5' 
        placeholder='Message' 
        name='message' 
      />
      <button 
        className='mt-5 h-12 w-24 bg-yellow-600 rounded-md font-medium transition duration-300 ease-in hover:scale-105 hover:text-white'
      >
        Submit
      </button>
      { done && "Thank you" }
    </form>
  )
};

export default Form;
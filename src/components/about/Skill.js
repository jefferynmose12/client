import React from 'react'

const Skill = ( { skill } ) => {
  return (
    <div className='m-2 p-4 py-2 cursor-pointer transition duration-300 ease-out bg-yellow-600 rounded hover:scale-105'>{skill}</div>
  )
}

export default Skill;
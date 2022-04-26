import React from 'react'
import EachContribution from './EachContribution'

const Contributions = ( { mode } ) => {
  return (
    <div className={"px-2 md:px-10 lg:px-28 xl:px-44 py-20 bg-white w-full " + ( mode ? 'bg-gray-800 text-white' : null)}>
        <h2 className='tracking-wider'>CONTRIBUTIONS</h2>
        <h1 className={"py-7 text-4xl lg:text-6xl tracking-wider text-gray-200 font-medium " + ( mode ? 'text-gray-700 ' : null)}>VIEW CONTRIBUTIONS</h1>
        <div className='my-5 lg:my-10 flex flex-col md:flex-row gap-10 justify-center items-center w-full'>
          <EachContribution />
        </div>
    </div>
  )
}

export default Contributions
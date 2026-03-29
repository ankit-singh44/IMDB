import React, { useState } from 'react'

const Pagination = ({ pageNo, handlePrevious, handleNext }) => {

  return (
    <div className='bg-gray-400 flex items-center justify-center p-4'>
      <div onClick={handlePrevious} className="mx-4 hover:cursor-pointer hover:scale-125 duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="mx-4 font-bold text-xl">{pageNo}</div>
      <div onClick={handleNext} className="mx-4 hover:cursor-pointer hover:scale-125 duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default Pagination
import React, { useState } from 'react'

const Pagination = ({pageNo,handlePrevious,handleNext}) => {

  return (
    <div className='bg-gray-400 flex items-center justify-center'>
      <div onClick={handlePrevious} className="mx-1 p-2 hover:cursor-pointer">PreviousPage</div>
      <div className="mx-1 p-2">{pageNo}</div>
      <div onClick={handleNext} className="mx-1 p-2 hover:cursor-pointer">NextPage</div>
    </div>
  )
}

export default Pagination
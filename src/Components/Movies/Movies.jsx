import React, { useState } from 'react'
import TypewriterSpinner from '../Common/Spinner';


const Movies = () => {

  // make state for movie and loader while movie data is not load
  const [movie,setMovie]=useState([])
  const[loading,setLoading]=useState(true);

  if(loading){
    return <TypewriterSpinner/>
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-2xl p-3 font-bold'>Trending Movies</h1>
      </div>
    </div>
  )
}

export default Movies
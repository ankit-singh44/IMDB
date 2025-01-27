import React from 'react'

const MovieCard = (props) => {
    
  return (
    <div className='h-96 w-48 bg-cover bg-center flex flex-col justify-between items-end m-4 rounded-xl shadow-lg transform overflow-hidden hover:scale-110 duration-300' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieObj.poster_path})`}}>
        <div className='w-full h-auto bg-black bg-opacity-40 p-4 mt-auto'>
            <h3 className='text-white text-lg font-bold text-center p-1.5'>{props.movieObj.original_title}</h3>
        </div>   
    </div>   
  )
}

export default MovieCard
import React from 'react'

const MovieCard = (props) => {
  
  const isMovieAvailableinWatchList=props.watchList.some(movie => movie.id == props.movieObj.id);
  console.log(isMovieAvailableinWatchList);
  
   
  return (
    <div className='h-96 w-48 bg-cover bg-center flex flex-col justify-between items-end m-4 rounded-xl shadow-lg transform overflow-hidden hover:scale-110 hover:cursor-pointer duration-300' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieObj.poster_path})`}}>
      {
        (!isMovieAvailableinWatchList)?
        <div className='mt-4'>
        <span onClick={()=>props.addToWatchList(props.movieObj)} className='m-4 mt-8 p-3 rounded-full' style={{fontSize: '22px',backgroundColor: 'rgba(31, 41, 55, 0.6)'}}>&#128525;</span>
      </div> :
      <div className='mt-4'>
        <span onClick={()=>props.removeFromWatchList(props.movieObj)} className='m-4 mt-8 p-3 rounded-full' style={{fontSize: '22px',backgroundColor: 'rgba(31, 41, 55, 0.6)'}}>&#10060;</span>
      </div>
      }
        <div className='w-full h-auto bg-black bg-opacity-40 p-4 mt-auto'>
            <h3 className='text-white text-lg font-bold text-center p-1.5'>{props.movieObj.original_title}</h3>
        </div>   
    </div>   
  )
}

export default MovieCard
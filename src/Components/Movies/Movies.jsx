import React, { useEffect, useState } from 'react'
import LoadingSpinner3 from '../Common/Spinner';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
// import TypewriterSpinner from '../Common/Spinner';



const Movies = () => {

  // make state for movie and loader while movie data is not load
  const [movies,setMovies]=useState([])
  const[loading,setLoading]=useState(false);


  // generate old work
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=fdfa545a5bd09648cfa3a73362b23a3a`)
    .then(function(response){
      let movies=response.data.results;
      setMovies(movies)
    })
  }, []);


  // Make Loader component in case data Api from API  not getting fetch from server
  if(loading){
    return <LoadingSpinner3/>
  }
  return (
    <div>
      <div>
        <h1 className='text-center text-2xl p-5 font-bold'>Trending Movies</h1>
      </div>

      <div className="flex flex-wrap justify-evenly space-y-10 ">
        {movies.map((movieObj)=>{
          return <MovieCard key={movieObj.id} movieObj={movieObj}/>
        })
        }
      </div>
    </div>
  )
}

export default Movies
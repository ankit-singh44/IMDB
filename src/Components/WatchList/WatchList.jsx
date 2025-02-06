import React, { useEffect, useState } from 'react'
import LoadingSpinner3 from '../Common/Spinner';
import genreids from '../../utilities/genres';

const WatchList = () => {
    const [movies,setMovies]=useState([]);
    const[loading,setLoading]=useState(true);
    
    const genreSet=new Set();

    // from movie we retrieve the data and get the genre id and store them into set so that we can get unique Genre
    movies.forEach((movie)=>{
      const genreIds=movie.genre_ids;
      const genreNames= genreIds.map((genreId)=> genreids[genreId]);
      genreNames.forEach((genreName)=>{
        genreSet.add(genreName);
      })
    })

    console.log(genreSet);

    // convert Set into ArrayList to map the data on url, we can see this on return part
    const genres=Array.from(genreSet);
    

    // store watchlist data to the state movie component
    useEffect(()=>{
      var watchListData=JSON.parse(localStorage.getItem("watchList"));
      if(watchListData===null){
        watchListData=[];
      }
      setLoading(false);
      console.log(watchListData);
      setMovies(watchListData);
    },[])
    

    //here we define the conditional rendering where the Loader shouls appear or WatchList movie data will appear
    if(loading){
      return <LoadingSpinner3/>
    }
    return <div>

      <div className='flex justify-center m-2'>
        {
          genres.map((genre)=> {
            return <div key={genre} className='flex items-center justify-center mx-4 bg-blue-400 h-10 w-28 text-white font-bold rounded-xl'>
              {genre}
            </div>
          })
        }
      </div>

      <div>
        <input type="text" placeholder='Search Movies'/>
      </div>

    </div>
}

export default WatchList
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
      const genreName= genreids[genreIds[0]];
        genreSet.add(genreName);
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

      {/* List of movies */}
      <div className='flex justify-center m-6'>
        {
          genres.map((genre)=> {
            return <div key={genre} className='flex items-center justify-center mx-4 bg-blue-400 h-10 w-28 text-white font-bold rounded-xl'>
              {genre}
            </div>
          })
        }
      </div>

      {/* Search Bar for search fav movie */}
      <div className='flex justify-center my-8'>
        <input type="text" placeholder='Search Movies'
        className='h-10 w-60 bg-gray-200 outline-none px-4'/>
      </div>

      {/* WatchList fav movie data presented in tabel */}
      <div className='m-6 rounded-lg overflow-hidden border shadow-md'>
        <table className='p-4 w-full text-center'>
          <thead className='bg-gray-50 h-12 border-b-2'>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              movies.map((movie)=>{
                return <tr className="border">
                  <td className='flex items-center mx-4 p-4'>
                    <div className='flex items-center gap-4'>
                      <img className='h-52' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="Movie Image`} />
                      {movies.title}
                      <span className='font-medium mx-2 '>{movie.title}</span>
                    </div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreids[movie.genre_ids[0]]}</td>
                  <td className='text-red-500'>Delete</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
}

export default WatchList
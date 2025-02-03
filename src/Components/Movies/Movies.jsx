import React, { useEffect, useState } from 'react'
import LoadingSpinner3 from '../Common/Spinner';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';
// import TypewriterSpinner from '../Common/Spinner';



const Movies = () => {

  // make state for movie and loader while movie data is not load
  const [movies,setMovies]=useState([])
  const[loading,setLoading]=useState(true);

  //make state to maintain the page no for pagination
  const[pageNo,setPageNo]=useState(1);
  const[watchList,setWatchList]=useState([]);

  function handlePrevious(){
    if(pageNo==1) return;
    setLoading(true);
    setPageNo(pageNo-1);
  }

  function handleNext(){
    setLoading(true);
    setPageNo(pageNo+1);
  }
  

// Action to perfom add to watchList
  const addToWatchList=(movieObj)=>{
    const updatedWatchList=[...watchList,movieObj];
    setWatchList(updatedWatchList);
    localStorage.setItem("watchList",JSON.stringify(updatedWatchList));
  }


  // Action to remove from WachList

  const removeFromWatchList=(movieObj)=>{
    const updatedWatchList=watchList.filter((movie)=>{
      return movie.id!=movieObj.id;
    })
    setWatchList(updatedWatchList);
    localStorage.setItem("watchList",JSON.stringify(updatedWatchList));
  }


  // useEffect fo fetching data from API and use that data to store and setMovies with updated value
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=fdfa545a5bd09648cfa3a73362b23a3a&page=${pageNo}`)
    .then(function(response){
      let movies=response.data.results;

      var watchListData=JSON.parse(localStorage.getItem("watchList"));
      if(watchListData===null){
        watchListData=[];
      }
      setWatchList(watchListData);
      setMovies(movies)
      setLoading(false)
    })
  }, [pageNo]);


  // Make Loader component in case data Api from API  not getting fetch from server
  if(loading){
    return <LoadingSpinner3/>
  }
  return (
    <div>
      <div>
        <h1 className='text-center text-2xl p-5 font-bold'>Trending Movies</h1>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {movies.map((movieObj)=>{
          return <MovieCard watchList={watchList} 
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
          key={movieObj.id} movieObj={movieObj}/>
        })
        }
      </div>
      <Pagination pageNo={pageNo} handlePrevious={handlePrevious} handleNext={handleNext}/>
    </div>
  )
}

export default Movies
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Banner = () => {

  // make state to manage BannerImage on Movie page and bt default the image will be this generic image
  const [bannerImage,setBannerImage]=useState("https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png");


  // make state to manag the Banner title

  const[title,setTitle]=useState("Movie Title");

  // make API call to fetch data from api and use it as Movie Banner

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=fdfa545a5bd09648cfa3a73362b23a3a`)
    .then(function(response){

      // console.log(response); 
      
      // build logic to covert api data  to getting image and Movie Title
      let movieData=response.data.results;
      let randomMovie=movieData[Math.floor(20*Math.random())];
      let randomImage=randomMovie.backdrop_path;
      let movieTitle=randomMovie.original_title;

      // set banner image and title to their Default state value

      setBannerImage(`https://image.tmdb.org/t/p/original/${randomImage}`);
      setTitle(movieTitle);


    })
  }, []);
  


//make a function to fetch moviePoster from API
  
  return (
    <div className='h-[80vh] p-4 bg-cover bg-center 
    flex items-end' 
    style={{backgroundImage: 
    `url(${bannerImage})`,
    height: '90vh'}}>
      <div className="relative z-10 text-white w-full text-center p-2 text-2xl">
        {title}
      </div>
    </div>
  );
}

export default Banner
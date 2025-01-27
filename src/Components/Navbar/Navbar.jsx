import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Images/imdb.png'

const Navbar = () => {
  return (
    <div className='flex space-x-7 items-center py-3 pl-3'>
        <Link to='/'>
        <img className='h-16 mx-10' src={Logo} alt="logo" />
        </Link>

        <Link className='text-2xl underline font-bold text-blue-500 space-x-8 items-center content-center' to='/'>
        Movies
        </Link>
        
        <Link className='text-2xl underline font-bold text-blue-500 space-x-8 items-center content-center' to='/watchlist'>
        WatchList
        </Link>
    </div>
  )
}

export default Navbar
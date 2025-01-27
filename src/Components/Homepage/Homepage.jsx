import React from 'react'
import Banner from '../Banner/Banner'
import Movies from '../Movies/Movies'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Movies/>
    </div>
  )
}
export default Homepage

// add at line number 7  className='min-h-screen'
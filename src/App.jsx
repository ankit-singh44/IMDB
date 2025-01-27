import './App.css'
import Homepage from './Components/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import WatchList from './Components/WatchList/WatchList'
import Movies from './Components/Movies/Movies'
// filepath: /Users/ankitsingh/ScalerClass/IMDB/src/index.js
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>      
          <Route path='/watchlist' element={<WatchList/>}></Route>
        </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App

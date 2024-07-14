

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Addblog from './components/Addblog'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Addblog/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
      </Routes>
      
    </>
  )
}

export default App

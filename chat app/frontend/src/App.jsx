import React from 'react'
import{Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className='text-red-500'>
      hell

      <Navabar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/signup' element ={<Home />} />
        <Route path='/login' element ={<Home />} />
        <Route path='/setting' element ={<Home />} />
        <Route path='/profile' element ={<Home />} />
      </Routes>
    </div>
  )
}

export default App

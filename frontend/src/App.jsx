import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
import AddFood from './pages/addRoute'
import SelectFood from './pages/selectFood'
import UpdateFood from './pages/updateFood'


function App() {
  return (
    <>
     <BrowserRouter> 
     
     <Routes>
      <Route path='/' element={<AddFood/>}/>
      <Route path='/foodSelect' element={<SelectFood/>}/>
      <Route path='/updateFood/:_id' element={<UpdateFood/>}/>
     </Routes>

     </BrowserRouter>

    </>
  )
}

export default App

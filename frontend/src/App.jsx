import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
import AddFood from './pages/foodRoute/addRoute'
import SelectFood from './pages/foodRoute/selectFood'
import UpdateFood from './pages/foodRoute/updateFood'
import RegisterImport from './pages/importRoute/registerImport'
import SelectImport from './pages/importRoute/selectImport'
  function App() {
  return (
    <>
     <BrowserRouter> 
     
     <Routes>
      <Route path='/' element={<AddFood/>}/>
      <Route path='/foodSelect' element={<SelectFood/>}/>
      <Route path='/updateFood/:_id' element={<UpdateFood/>}/>
      <Route path='/registerImport' element={<RegisterImport/>}/>
      <Route path='/selectImport' element={<SelectImport/>}/>
      
      
     </Routes>

     </BrowserRouter>

    </>
  )
}

export default App

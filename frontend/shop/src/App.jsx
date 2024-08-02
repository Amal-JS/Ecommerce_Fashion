import { useState } from 'react'
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import './App.css'
import { Index } from './components/user/Index'
import { Login } from './components/user/Login';

function App() {

  return (
    <>
      <div>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      </div>
   
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Login } from './Components/Login'
import { Register } from './Components/Registration'

function App() {


  return (
    <div className="App">
      <Home />
      <Register />
      <Login />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './Components/Info'
import About from './Components/About'

function App() {

  return (
    <div className='card'>
      <Info />
      <About />
    </div>
  )
}

export default App

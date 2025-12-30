import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bard from './components/Bard'
function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind </h1>
      <Bard username="souvik"/>
      <Bard username="maity"/>
    </>
  )
}

export default App

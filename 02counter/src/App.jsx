import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let[counter,setCounter]=useState(15)
let addValue= ()=>{
  counter+=1
  if (counter<=20){
    setCounter(counter)
  }
  else{
    setCounter(20)
  }
}

let removeValue=()=>{
  counter-=1
  if (counter>=0){
    setCounter(counter)
  }
  else{
    setCounter(0)
  }
}
  return (
    <>
    <h1>Chai aur code</h1>
    <h3>counter={counter}</h3>
    <button onClick={addValue}>Add </button><br/>
    <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setColor]=useState("");
document.body.style.backgroundColor=color;

  return (
    <div>

    <button onClick={()=>{
     if(color==="") setColor("black") 
     else setColor("")}}id='change-btn'>Change Color</button>
  

    </div>
  )
}

export default App

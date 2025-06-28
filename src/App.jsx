import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState("olive")
 

  return (
    <div className="w-full h-screen duration=200" style={{backgroundColor:color}}>
      <p className="text-3xl md:text-3xl font-extrabold text-center text-black tracking-wide uppercase bg-gradient-to-r from-yellow-100 via-beige to-white py-3 rounded-md shadow-lg">
  Background Changer
</p>

      
      <div className='fixed flex flex-wrap justify-center items-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justiy-center gap-3 bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>{setColor("red")}} 
          className='px-4 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button>

          <button 
          onClick={()=>{setColor("blue")}} 
          className='px-4 py-1 rounded-full' style={{backgroundColor:"blue"}}>blue</button>

          <button onClick={()=>{
            setColor("pink")
          }} className='px-4 py-1 rounded-full' style={{backgroundColor:"pink"}}>pink</button>

          <button onClick={()=>{
            setColor("grwen")
          }} className='px-4 py-1 rounded-full' style={{backgroundColor:"green"}}>green</button>

          <button onClick={()=>{
            setColor("black")
          }} className='px-4 py-1 rounded-full text-white' style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
 
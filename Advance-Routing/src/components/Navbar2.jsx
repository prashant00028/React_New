import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let  navigate = useNavigate();
  return (
    <div>
      <div className='py-3 px-4 flex gap-2 bg-cyan-600'>
        <button onClick={()=>{
            navigate('/')
        }} 
        className='bg-amber-400 py-2 px-4 rounded-2xl cursor-pointer active:scale-95'>
            Return to Home page
        </button>
        <button onClick={()=>{
            navigate(-1)
        }}
        className='bg-amber-400 py-2 px-4 rounded-2xl cursor-pointer active:scale-95'>
            Next
        </button>
        <button onClick={()=>{
            navigate(+1)
        }}
        className='bg-amber-400 py-2 px-4 rounded-2xl cursor-pointer active:scale-95'>
            Back
        </button>
      </div>
    </div>
  )
}

export default Navbar2

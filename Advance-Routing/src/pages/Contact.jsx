import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-10 mt-5 text-lg font-semibold'>
            <Link to='/contact/chat'>Chat</Link>
            <Link to='/contact/call'>Call</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Contact

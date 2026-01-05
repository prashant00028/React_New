import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-sky-400 '>
      <h3 className='text-xl font-bold '>Prashant</h3>
      <div className='flex items-center gap-10'>
        <a href="/" className='text-lg font-bold'>Home</a>
        <a href="/about" className='text-lg font-bold'>About</a>
        <a href="/contact" className='text-lg font-bold'>Contact</a>
        <a href="/courses"  className='text-lg font-bold'>Courses</a>
      </div>
    </div>
  )
}

export default Navbar

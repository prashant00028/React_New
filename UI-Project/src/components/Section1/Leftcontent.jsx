import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-[75vh] w-1/3 flex flex-col justify-between'>
      <Hero/>
      <Arrow/>
    </div>
  )
}

export default Leftcontent

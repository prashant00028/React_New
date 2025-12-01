import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Page1content = () => {
  return (
    <div className='py-8 flex  gap-10 px-18 h-[90vh] bg-amber-950 '>
      <Leftcontent/>
      <Rightcontent/>
      
    </div>
  )
}

export default Page1content

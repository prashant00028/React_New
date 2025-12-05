import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-4 flex flex-col justify-between'>
        <h2 className='ml-1 bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl font-semibold'>{props.id}</h2>

        <div>
           <p className='text-sm leading-normal text-white mb-9 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam sint cumque, ex porro at!</p>
           <div className='flex justify-between'>
            <button className='bg-blue-600 px-4 py-1 rounded-full font-semibold text-white'>{props.tag}</button>
            <button  className='bg-blue-600 px-4 py-1 rounded-full font-semibold text-white'><i class="ri-arrow-right-line"></i></button>
           </div>
        </div>
      </div>
   
    </div>
  )
}

export default Rightcardcontent

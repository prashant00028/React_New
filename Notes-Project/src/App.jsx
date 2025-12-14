import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log('Form Submitted')
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 flex-col items-start gap-5  p-10' >
        <h1 className='text-xl font-bold'>Add notes</h1>
        <input type="text"
       placeholder='Enter Notes heading' 
       className='px-5  w-full py-2 border-2 outline-none  rounded'/>
      
      <textarea   placeholder='Write details'
       className='px-5 w-full h-30 py-2 border-2 outline-none rounded'>
      </textarea>
       
       <button className='bg-white text-black px-5 w-full outline-none py-2 rounded'>Add notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-xl font-bold'>Your notes</h1>
       <div className='flex flex-wrap gap-8 mt-4 h-full'>
       <div className="h-52 w-40 rounded-2xl bg-white"></div>
       <div className="h-52 w-40 rounded-2xl bg-white"></div>
       <div className="h-52 w-40 rounded-2xl bg-white"></div>
       <div className="h-52 w-40 rounded-2xl bg-white"></div>
       <div className="h-52 w-40 rounded-2xl bg-white"></div>
       </div>

        
      </div>
     
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detailed, setDetailed] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log('Form Submitted')

    const copyTask = [...task]
    copyTask.push({title,detailed})
    setTask(copyTask);
    console.log(copyTask)

    setTitle('')
    setDetailed('')
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='flex lg:w-1/2 flex-col items-start gap-5  p-10' >
        <h1 className='text-xl font-bold'>Add notes</h1>

        <input type="text"
       placeholder='Enter Notes heading' 
       className='px-5  w-full py-2 border-2 outline-none  rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
       
      
      <textarea  
       type="text"
       className='px-5 w-full h-30 py-2 border-2 outline-none rounded'
       placeholder='Write details'
       value={detailed}
       onChange={(e)=>{
        setDetailed(e.target.value);
       }}
       />
       
       <button className='bg-white active:scale-95 text-black px-5 w-full outline-none py-2 rounded'>Add notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-xl font-bold'>Recent notes</h1>

       <div className='flex  items-start justify-start flex-wrap gap-8 mt-4 h-full'>
        {task.map(function(elem,idx){

          return <div key= {idx} className="h-52 w-40 rounded-2xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s)] bg-cover text-black py-8 px-4">
            <h3 className=' p-1 leading-tight font-bold text-xl'>
              {elem.title}
              </h3>
              <p className='mt-1 leading-normal font-medium text-gray-500 px-1 '>
                {elem.detailed}

              </p>
          </div>
        })}
       </div>

        
      </div>
     
    </div>
  )
}

export default App

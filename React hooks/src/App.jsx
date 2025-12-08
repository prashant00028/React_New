import React from 'react'
import { useState } from 'react'

const App = () => {
// useState hook
  const [first, setfirst] = useState(0)

  const increaseValue = () =>{
    setfirst(first+1)
  }

  const decreaseValue = () =>{
    setfirst(first-1)
  }
  return (
    <div className='app'>
      <div className="heading">
      <h1>{first}</h1>
      </div>
    
    <div className="buttons">
    <button onClick={increaseValue}>increase</button>
    <button onClick={decreaseValue}>decrease</button>
    </div>
   
    </div>
  )
}

export default App

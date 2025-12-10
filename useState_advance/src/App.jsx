import React from 'react'
import { useState } from 'react'

const App = () => {
  // const [first, setfirst] = useState({name:'Prashant', age:30})
  const [num, setnum] = useState([20,50,40])

  const change = () =>{
    // const newfirst = {...first}
    // newfirst.name = 'Priyanshu'
    // newfirst.age = 50
    // setfirst(newfirst)
    const newArr = [...num]
    newArr.push(80)
    console.log(newArr)
    setnum(newArr)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default App

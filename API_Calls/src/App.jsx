import React from "react"
import { useState } from "react"
import axios from "axios"
const app = () =>{
const getdata = async () =>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data = await response.json()
//   console.log(data)
//   console.log(data.userId, data.title)

}
  return(
    <div>
     <button onClick={getdata}>Get data</button>
    </div>
    
  )
}
export default app
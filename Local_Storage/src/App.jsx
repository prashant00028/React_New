import React from "react"
const app = () =>{

 const user = localStorage.getItem('user')
 console.log(typeof(user))
  return (
    <div>App</div>
  )
}
export default app
import React, { useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login'

const App = () => {

const [isLoggedIn, setIsLoggedIn] = useState(()=>{
  return localStorage.getItem("login") === "true";
});

useEffect(()=>{
  localStorage.setItem("login",isLoggedIn);
},[isLoggedIn])

  return (
    <div>
      <h1>Login Status App</h1>

      {isLoggedIn ? (
        <Dashboard onLogout= {()=> setIsLoggedIn(false)}/>
      ):(
        <Login onLogin = {()=> setIsLoggedIn(true)
        }/>
      )}
    </div>
  )
}

export default App

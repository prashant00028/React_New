import React from 'react'
import Cards from './components/Cards'


const App = () => {
  return (
    <div className="parent">
      <Cards user="Prashant" img="https://plus.unsplash.com/premium_photo-1726098568876-85a88d77fd4c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
      <Cards user="Priyanshu" img="https://images.unsplash.com/photo-1763142275498-c87a9acb57ec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App

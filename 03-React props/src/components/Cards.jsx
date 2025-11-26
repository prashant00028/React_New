import React from 'react'

const Cards = (props) => { // Using  of Props 
  return (
    <div>
       <div className='cards'>
       <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Cards

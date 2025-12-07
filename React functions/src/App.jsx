import React from 'react'

const App = () => {

  // const btnclicked = () =>{
  //   console.log("Button is clicked")

  const pagescroll = () =>{
    console.log("Scrolling....");
  }

  }
  return (
    <div onWheel={pagescroll}>
      {/* <h1>Hello,Prashant</h1>
      <button >click</button>

      <div class="inpt">
      <input onChange={(elem)=>{
      console.log(elem.target.value)
      }}type="text" placeholder='Enter your name' />
      </div> */}

     <div className="page1"></div>
     <div className="page2"></div>
     <div className="page3"></div>
    </div>
  )

export default App

import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:"https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww",
      intro:'',
      tag:'Satiesfied',
      id:"1"

    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'',
      tag:'Underserved',
      id:"2"
    },
    {
      img:"https://images.unsplash.com/photo-1588534331431-95ee61de0302?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'',
      tag:'Underbanked',
      id:"3"
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App

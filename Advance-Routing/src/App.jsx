import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './Notfound'
import Chat from './components/Chat'
import Call from './components/Call'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}>
          <Route path='/contact/chat' element={<Chat/>}/>
          <Route path='/contact/call' element={<Call/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

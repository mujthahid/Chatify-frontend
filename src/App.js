import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import SetAvatar from './pages/SetAvatar'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route exact path='/' element={<Chat/>}></Route>
    <Route path='/setAvatar' element={<SetAvatar/>}/> 
    
   </Routes>
   </BrowserRouter>
  )
}

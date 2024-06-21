import React from 'react'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Header'
import Videos from './Component/Videos'
import Freevideos from './Component/Freevideos'
import Uploadvideos from './Component/Uploadvideos'
import { CAlert } from '@coreui/react';
import Login from './Authorization/Login'
import Signup from './Authorization/Signup'
const App = () => {
  return (
    <Router className="example">
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/videos' element={<Videos/>}/>
       <Route path='/freevideos' element={<Freevideos/>}/>
       <Route path='/uploadvideos' element={<Uploadvideos/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
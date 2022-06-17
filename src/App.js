import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Error from './components/Error'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <Routes >
        <Route path='/' element={<PrivateRoute/>} exact> </Route>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </Wrapper>
  ) 
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Wallet from '../../pages/Wallet/Wallet'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wallet' element={<Wallet/>} />
    </Routes>
  )
}

export default App

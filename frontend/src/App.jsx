import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/second' element={<SecondPage />}></Route>
      </Routes>
    </div>
  )
}

export default App

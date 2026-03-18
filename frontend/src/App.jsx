import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

// PRODUCT IMAGE UPLOADER (CRUD)
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/add' element={<SecondPage />}></Route>
        <Route path='/:prodId' element={<ThirdPage />}></Route>
      </Routes>
    </div>
  )
}

export default App

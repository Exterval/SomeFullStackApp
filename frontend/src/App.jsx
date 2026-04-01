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
        <Route path='/SomeFullStackApp/' element={<HomePage />}></Route>
        <Route path='/SomeFullStackApp/add' element={<SecondPage />}></Route>
        <Route path='/SomeFullStackApp/:prodId' element={<ThirdPage />}></Route>
      </Routes>
    </div>
  )
}

export default App

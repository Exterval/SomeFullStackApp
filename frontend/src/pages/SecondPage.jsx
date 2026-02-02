import React from 'react'
import { Link } from 'react-router'

const SecondPage = () => {
  return (
    <div>
      <p>Hi</p>
      <Link to={'/'} className='bg-gray-600'>Go back pls</Link>
    </div>
  )
}

export default SecondPage

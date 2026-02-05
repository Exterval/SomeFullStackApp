import React from 'react'
import { Menu  } from 'lucide-react'

const NavBar = () => {
  return (
    <header className='bg-gradient-to-r from-slate-300 to-slate-700'>
        
        <div className='mx-auto max-w-6xl p-5'>
            <div className="flex items-center justify-between">
                {/** MAKE DROPDOWN */}
                <button className='hover:bg-slate-400 transition duration-300 ease-in-out rounded-sm'><Menu /></button>
                <h1 className='font-normal text-2xl text-white'>App</h1>
            </div>
        </div>
    </header>
  )
}

export default NavBar

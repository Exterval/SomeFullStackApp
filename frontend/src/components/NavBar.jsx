import React, { useState } from 'react'
import { Menu  } from 'lucide-react'

const NavBar = () => {

  const [display, setDisplay] = useState(false);

  function handleShowMenu(e){
    console.log(e.target);
    setDisplay(d => display ? false : true)
  }

  return (
    <header className='bg-gradient-to-r from-slate-300 to-slate-700'>
        <div className='mx-auto max-w-6xl p-5'>
            <div className="flex items-center justify-between">
                {/** MAKE DROPDOWN & ADD CRUD FUNCTION */}
                <button className='hover:bg-slate-400 transition duration-300 ease-in-out rounded-sm' onClick={(e) => handleShowMenu(e)}><Menu /></button>
                {// fix style
                display && <div className='absolute left-52 translate-y-24 rounded bg-slate-300 shadow-lg p-3 w-max'> 
                  <ul>
                    <h3 className='font-semibold text-lg'>Menu</h3>
                    <hr />
                    <li>Add</li>
                    <li>Update</li>
                    <li>Delete</li>
                  </ul>
                  </div>}
                <h1 className='font-normal text-2xl text-white'>App</h1>
            </div>
        </div>
    </header>
  )
}

export default NavBar

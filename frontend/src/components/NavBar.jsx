import React, { useState } from 'react'
import { Menu  } from 'lucide-react'
import { Link } from 'react-router';

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
                display && <div className='absolute left-64 translate-y-24 rounded bg-slate-300 shadow-lg p-3 w-max'> 
                  <ul>
                    <h3 className='font-semibold text-xl'>Menu</h3>
                    <hr />
                    <li><Link to={"/add"} className='bg-blue-500 hover:bg-blue-700'>Add</Link></li>
                    <li><Link to={"/update"} className='bg-blue-500 hover:bg-blue-700'>Update</Link></li>
                    <li><Link to={"/delete"} className='bg-blue-500 hover:bg-blue-700'>Delete</Link></li>
                  </ul>
                  </div>}
                <h1 className='font-normal text-2xl text-white'>App</h1>
            </div>
        </div>
    </header>
  )
}

export default NavBar

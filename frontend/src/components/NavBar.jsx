import React, { useState } from 'react'
import { Menu  } from 'lucide-react'
import { Link } from 'react-router';
import {Plus} from 'lucide-react';

const NavBar = () => {

  const [display, setDisplay] = useState(false);

  return (
    <header className='bg-gradient-to-r from-slate-300 to-slate-700'>
        <div className='mx-auto max-w-6xl p-5'>
            <div className="flex items-center justify-between">
                {/** MAKE DROPDOWN & ADD CRUD FUNCTION */}
                <Link to={'/SomeFullStackApp/add'} className='hover:bg-slate-400 transition duration-300 ease-in-out rounded-sm' ><Plus /></Link>
                <h1 className='font-normal text-2xl text-white'>Products</h1>
            </div>
        </div>
    </header>
  )
}

export default NavBar

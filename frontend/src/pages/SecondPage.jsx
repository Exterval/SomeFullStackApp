import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast';
import NavBar from '../components/NavBar'

const SecondPage = () => {

  // data has to have an attribute of name, price, desc, and id.
  const [data , setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleAddProduct = async (e) =>{
    e.preventDefault();

    if(!name.trim || !description.trim || !price){
      toast.error('All fields are required.')
      return;
    }

    setLoading(true);

    try {
      const {data} = await axios.post('/app/add', {name, price, description});
      toast.success('Posted product successfully! Returning to home page...');
      // add code to put in data.js
      console.log(data);
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('An error occurred.')
    }

  }
  
  return (
    <div className='min-h-screen bg-slate-400'>
      <NavBar />
      
      <div className="container m-auto my-5">
        <Link to={'/'} className='bg-slate-200 mr-5 hover:text-slate-100 transition-all ease-in-out'><ArrowLeft /></Link>
        <h2 className='text-3xl my-5 text-center'>Post a Product</h2>
        <div className="">
          <form onSubmit={handleAddProduct} className='border border-slate-300 p-5 max-w-md mx-auto  backdrop-blur-2xl rounded-xl transition-all ease-in-out'>
            <div className="mb-4">
              <label className='label'>
                <span className='block mb-2 text-white'>Name</span>
              </label>
              <input type="text" name="" className='px-3 bg-neutral-100 text-sm rounded-2xl py-2 w-full ' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className='label'>
                <span className='block mb-2 text-white'>Price</span>
              </label>
              <input type="number" name="" className='px-3 bg-neutral-100 text-sm rounded-2xl py-2 w-full ' value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className='label'>
                <span className='block mb-2 text-white'>Description</span>
              </label>
              <textarea name="" rows='3' className='px-3 bg-neutral-100 text-sm rounded-2xl py-2 w-full ' value={description} onChange={(e)=>setDescription(e.target.value)} style={{resize: "none"}} />
            </div>
            <div className="justify-end">
              <button type="submit" className='bg-slate-700 hover:bg-slate-500 p-2 rounded-2xl transition-all ease-in-out text-white w-full' disabled={loading}>
                {loading ? 'Loading...' : 'Post Product'}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SecondPage

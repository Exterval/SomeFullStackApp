import { SquarePen, Trash } from 'lucide-react';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Card = (props) => {

const data = props.data || {};
const navigate = useNavigate();

    function properCase(text){ /** CREDITS TO FCC */
        return text.toLowerCase().split(' ').map(
            function(txt){
                return txt.replace(txt[0], txt[0].toUpperCase())
            }
            ).join(' ');
    }

    // FIX STYLE

    // transfer all CRUD functions here
    // should have an update and delete button.

    
    const handleDelete = async (e, id) => { // delete function
        e.preventDefault();
        if(!window.confirm('Are you sure you want to delete this product?')) return;
        console.log(id)
        try {
          await axios.delete(`/app/${id}`)
          window.location.reload(); // force reload to refresh data, refactor
          toast.success('Product deleted!')
        } catch (error) {
          console.error(error);
        }
    }

    const handleUpdate = (e, id) =>{
        e.preventDefault();
        
    }

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl shadow-md md:max-w-2xl mt-5 hover:translate-y-1 transition-all ease-in-out hover:bg-gray-200 backdrop-blur-2xl border-1 border-slate-300" style={{background: 'rgba(255, 255, 255, 0.15);'}}>
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48"
        src={data.image}
        alt="Lorem ipsum"
      />
    </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide uppercase">{data.price} €</div>
      <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        {properCase(String(data.name))}
      </a>
      <p className="mt-2 text-gray-500">
        {data.desc}
      </p>
      <div className="flex gap-3 justify-end mt-3">
        <button className='flex gap-1 justify-center w-fit p-2 text-sm rounded-2xl bg-green-300 hover:bg-green-500 hover:text-white transition-all ease-in-out text-center'><SquarePen />Edit</button>
        <button className='flex gap-1 justify-center w-fit p-2 text-sm rounded-2xl bg-red-300 hover:bg-red-500 hover:text-white transition-all ease-in-out text-center' onClick={(e)=>handleDelete(e, data.id)}><Trash />Delete</button>
      </div>
    </div>

  </div>
</div>
  )
}

export default Card;

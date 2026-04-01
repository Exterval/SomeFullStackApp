import React, { useState } from 'react'
import { Link } from 'react-router'
import toast from 'react-hot-toast';
import { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import NavBar from '../components/NavBar'

const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getHome(){
            try{
                const resp = await axios.get('/SomeFullStackApp/app', {
                  timeout: 5000
                })
                console.log(resp.status)
                if(resp.status !== 200) throw new Error(`${resp.status}`)
                const { data } = resp.data;
                console.log(data);
                setData(data);
            }catch(err){
                console.log(err)
                toast.error('An error occurred.')
            }
        }
        getHome()
    },[])
  return (
    <div className='min-h-screen bg-slate-400'>
      <NavBar />
      <div className="text-5xl font-serif p-5 text-center text-cyan-50 mt-5">Products Display</div>
      <div className='container m-auto p-5 flex flex-row flex-wrap'>
          {data.length
            ? data.map(elem => <Card key={elem.id || elem._id} data={elem} />)
            : <p className='text-blue-200'>Loading...</p>
          }
      </div>
    </div>
  )
}

export default HomePage

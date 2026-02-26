import React, { useState } from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import NavBar from '../components/NavBar'

const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getHome(){
            try{
                const resp = await axios.get('/app', {
                  timeout: 5000
                })
                console.log(resp.status)
                if(!resp.status == 200) throw new Error(`${resp.status}`)
                const {data} = resp.data;
                console.log(data);
                setData(d => [...data]);
            }catch(err){
                console.log(err)
            }
        }
        getHome()
    },[])
  return (
    <div className='min-h-screen bg-slate-400'>
      <NavBar />
      <div className="text-5xl font-serif p-5 text-center text-cyan-50 mt-5">Products Display</div>
      <div className='container m-auto p-5 flex flex-row flex-wrap'>
          {data.map(elem=><Card data={elem} />) || <p className='text-blue-200'>'Loading...'</p>}
      </div>
    </div>
  )
}

export default HomePage

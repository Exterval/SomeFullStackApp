import React, { useState } from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getHome(){
            try{
                const resp = await axios.get('/app')
                console.log(resp.status)
                if(!resp.status == 200) throw new Error(`${resp.status}`)
                const {data} = resp.data;
                console.log(data);
                setData(d => [d,...data]);
            }catch(err){
                console.log(err)
            }
        }
        getHome()
    },[])
  return (
    <div className='min-h-screen bg-slate-400'>
      <NavBar />
      <div className='container'>{data.map(elem=><li key={elem.id}>{elem.name}</li>) || 'Loading...'}</div>
    </div>
  )
}

export default HomePage

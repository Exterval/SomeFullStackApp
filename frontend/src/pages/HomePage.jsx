import React from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

const HomePage = () => {
    useEffect(()=>{
        async function getHome(){
            try{
                const resp = await axios.get('/app')
                console.log(resp.status)
                if(!resp.status == 200) throw new Error(`${resp.status}`)
                console.log(resp.data)
            }catch(err){
                console.log(err)
            }
        }
        getHome()
    },[])
  return (
    <div className='min-h-screen bg-slate-400'>
      <NavBar />
      {/* <Link to={'/second'} className='bg-amber-400'>Click me pls</Link> */}
    </div>
  )
}

export default HomePage

import React from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'

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
    <div>
      <p>Hello</p>
      <Link to={'/second'} className='bg-amber-400'>Click me pls</Link>
    </div>
  )
}

export default HomePage

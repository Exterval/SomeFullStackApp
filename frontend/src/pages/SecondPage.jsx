import React from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'

const SecondPage = () => {

  useEffect(()=>{
        async function getHome(){
            try{
                const resp = await axios.get('/app/second')
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
      <p>Hi</p>
      <Link to={'/'} className='bg-gray-600'>Go back pls</Link>
    </div>
  )
}

export default SecondPage

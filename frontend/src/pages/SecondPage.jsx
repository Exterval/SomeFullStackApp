import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const SecondPage = () => {

  const [data , setData] = useState('');

  useEffect(()=>{
        async function postHome(){
            try{
                const resp = await axios.post('/app/add')
                console.log(resp.status)
                
                if(resp.status !== 200) throw new Error(`${resp.status}`)

                console.log(resp.data.message)
                setData(resp.data.message);
            }catch(err){
                console.log(err)
            }
        }
        postHome()
    },[])
  
  return (
    <div>
      <p id='test'>{data || 'Hi'}</p>
      <Link to={'/'} className='bg-gray-600'>Go back pls</Link>
    </div>
  )
}

export default SecondPage

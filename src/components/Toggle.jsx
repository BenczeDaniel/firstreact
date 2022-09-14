import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

export const Toggle=()=> 
 {
  const [isHappy,setisHappy]=useState(true)
  return (
    <div className='text-center mt-3'>
        <button onClick={()=>setisHappy(!isHappy)}>Are you Happy?{isHappy?'😍':'🤐'} </button>
        
    </div>
  )
}
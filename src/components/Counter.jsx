import React , {useState} from 'react'


export const Counter=()=> 
 {

    const [counter,setCounter]=useState(0)
    const handleMinus=()=> {
      if(counter>0)
      setCounter(counter - 1)
    }

  return (



    
    <div className='d-flex justify-around w-50 border'>
        <i className="fa-regular fa-square-plus fa-3x m-5 text-success" onClick={()=>setCounter(counter+1)}></i>
        <div className='szamlalo m-5'>A számláló értéke: {counter}   </div>
        <i className="fa-solid fa-minus fa-3x m-5 text-danger" onClick={handleMinus}></i>
    </div>
  )
}

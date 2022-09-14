import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const nev="Gyuszika"
  const piros={color:"red"}
  const zold={color:"green"}

  const vidam=[ishappy,setishappy] =useState('😂')




  const [counter,setCounter]=useState(0)

  const handleMinus=() => {
    if(counter>0)
    setCounter(counter-1)

    else setCounter(0)
  }

const handleHappy=() => {
  console.log(ishappy)
  ishappy=='😀'? setishappy('😀') : setishappy('🤗')
}

  return (
    <div className="container">
      <h1>Első react projekt!</h1>
      <h4 >Üdvözöljük {nev} 😮!</h4>
      <div style={ counter<10? piros  : zold}>Szamlalo:{counter}</div>
      <Button variant="danger p-2 m-2" onClick={()=>setCounter(counter+1)}>+</Button>{' '} 
      <button className='btn btn-warning p-2 m-2' onClick={handleMinus}>-</button>
    { /* <p>{ counter>10 ?"😄" : "😥"}</p> */}
      <button onClick={handleHappy}>kapcsolo</button>
      <div className="happy">{ishappy}</div>
    </div>
  );
}

export default App;

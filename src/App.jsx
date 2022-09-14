import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import {Toggle} from './components/Toggle';
import {Todo} from './components/Todo'
import {Counter} from './components/Counter';

function App() {
    return (
        <div className='container text-center d-flex justify-content-center'>
            <div className="row">
                <h1 className='w-100 text-center'>My first react app !</h1>      
            </div>
           
            <Counter />
            <Todo />
            <Toggle />
            
             </div>
)}


export default App;
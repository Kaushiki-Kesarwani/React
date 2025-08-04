

import { useState } from 'react'
import './App.css'
import State from './Components/State_lifting';

function App() {
const[name,setName]=useState('');

  return (
    <>
      <div>
        <State title="State1" name={name} setName={setName}/>
        <State  title="State2" name={name} setName={setName}/>
        <p>This is inside parent see the value of name:{name}</p>

        
      </div>
   
    </>
  )
}

export default App

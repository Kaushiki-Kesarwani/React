import { useState } from 'react';
import { useRef } from 'react';
import './App.css'

function App() {
const[count,setCount]=useState(0);

let val=useRef(0);
let btnref=useRef();

function handleClick(){
 val.current=val.current+1;
  console.log("value =",val);
  setCount((count)=>count+1);
}

function handleChange(){
  btnref.current.style.backgroundColor="red";
}

  return (
    <>
   count = {count}
    <br />
    <button ref={btnref} onClick={handleClick}>Click</button> 
  <br />
  <br />
  <button onClick={handleChange}>Change button color</button>
 
    </>
  )
}

export default App

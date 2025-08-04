import React, { useState } from 'react';
import "./Counter.css"


const Counter = () => {
  const[count,SetCount]=useState(0);
  return (
    <div className='counter-container'>
        <p id="para">You have clicked {count} times</p>
        <button id="btn" onClick={()=>{SetCount(count+1)}}>Click me!</button>
    </div>
  )
}

export default Counter

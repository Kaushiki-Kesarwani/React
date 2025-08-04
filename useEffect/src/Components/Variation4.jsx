import React from 'react'
import { useState,useEffect } from 'react'
const Variation4 = () => {
    const[count,setCount]=useState(0);


useEffect(()=>{
alert("this is mounted");

return ()=>{alert("unmounted");};
},[count]);

let handlerCount=()=>{
    setCount(count+1);
}

  return (
    <div>
       <h1>  Counting :{count}</h1>
      <button onClick={handlerCount}>
        Click me <br />
        </button>
      
    </div>
  )
}

export default Variation4

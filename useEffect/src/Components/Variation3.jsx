import React from 'react'
import { useState , useEffect} from 'react'

const Variation3 = () => {
    const[count,setCount]=useState(0);
    const[total,setTotal]=useState(1);


    let handlerCount=()=>{
        setCount(count+1);
    }

    let handlerTotal=()=>{
        setTotal(total+1);
    }

    useEffect(()=>{alert("This is Variation Three runs when count increases ")},
[count,total]
);
  return (
    <div>
       <button onClick={handlerCount}>
        Click count = {count}</button> 
<br />
<br />
        <button onClick={handlerTotal}>
        Click total = {total}</button> 
    </div>
  )
}

export default Variation3

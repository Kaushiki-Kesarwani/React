import React from 'react'
import { useState , useEffect} from 'react'

const Variation2 = () => {
const[count,setCount]=useState(0);

let handlerCount=()=>{
    setCount(count+1);
}

useEffect(()=>{alert("This is Variation Two runs only once")},
[]
);

  return (
    <div>
     <button onClick={handlerCount}>Click {count}</button> 
    </div>
  )
}

export default Variation2

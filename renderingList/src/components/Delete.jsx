import React from 'react'
import { useState } from 'react'


const Delete = () => {

    const[item,setItem]=useState(["apple","banana","mango","grapes","guava"]);

    const handledelete=(idx)=>{
        setItem(item.filter((_,index)=>index!==idx));
    }

    

  return (
     <div>
      <ul>
        {item.map((i, idx) => (
          <li key={idx}>
            {i}
            <button onClick={() => handledelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Delete
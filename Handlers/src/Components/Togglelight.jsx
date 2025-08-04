import React from 'react'
import './Togglelight.css'

const Togglelight = () => {

  const change=()=>{
 
  let bodyStyle=document.body.style;

  if(bodyStyle.backgroundColor==="black"){
    bodyStyle.backgroundColor="white";

  }
  else{
   
    bodyStyle.backgroundColor="black"
  }
}
  return (
    <div >
      <button id="btn"onClick={change}>Toggle the lights</button>
    </div>
  )
}

export default Togglelight
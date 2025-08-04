import React from 'react'
import './handler.css'
const handler = ({message,children}) => {
// let name=prompt("Enter your name here:");
// alert(name);

  return (
    <div className='handler'><button id="btn"onClick={()=>alert(message)}>{children}</button></div>
  )
}

export default handler
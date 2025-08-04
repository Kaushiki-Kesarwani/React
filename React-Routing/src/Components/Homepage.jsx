import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
navigate("./About");
  }
  
  return (
    <div>
      <button onClick={handleClick}>Move to About page</button>
      <br />
      This is Home page
    </div>
  )
}

export default Homepage

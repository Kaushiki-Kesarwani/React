import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const About = () => {
  const navigate=useNavigate();

  const handlerClick=()=>{
    navigate('/Dashboard');
  }
  return (
    <div>
      <button onClick={handlerClick}>Move to Dashboard page</button>
      <br />
       This is About page
       <Outlet/>
    </div>
  )
}

export default About

import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'

const About_page = ({name,image}) => {

  const navigate=useNavigate();
  const navi_home=useNavigate();

  function handlenext(){
    navigate("/Project")
  }

  function movetohome(){
    navi_home("/")
  }

  return (

    <div>
     <h1 id="heading">About page</h1>
    <img id="pic"src={image} alt={image}/>
    
<p><i>Hello! My name is {name},currently pursuing BCA in 5th semester.<br/>I have a good Knowledge of C language and DSA and I have practiced <br/>enough questions on leetcode and hackerrank plateform.I have also worked in<br/> web development by learning HTML,css,javaScript and react also and now<br/> I am making project using these skill of web development. </i></p>

<button id="btn"onClick={handlenext}> Project page</button>
<br />
<br />
<button onClick={movetohome}>Home page</button>
    </div>
  )
}

export default About_page
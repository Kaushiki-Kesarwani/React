import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './project.css';

const Project_page = ({code,webdev,leet,hackerrank,react,web}) => {

  const naviAbout=useNavigate();
  const naviHome=useNavigate();


  function moveAbout(){
    naviAbout("/about");
  }

  function moveHome(){
    naviHome("/");
  }


  return (
    <div>
      <h1> Project page</h1>

<div className='project'>

  <div id='box1'>
  <h1> Coding</h1>
 <img id='code' src={code} alt={code} />
<br />
  <button onClick={() => window.open(leet, "_blank")}>Go to leetcode</button>
  <br />
  <br />
  <button onClick={()=> window.open(hackerrank,"_blank")}>Go to hackerrank</button>
  </div>

      <br />
      <div id='box2'>
        <h1>Web Development</h1>
 <img id='web' src={webdev} alt={webdev} />
<br />
<button onClick={()=>window.open(react,"_blank")}>Go to github react </button>
<br />
<br />
<button onClick={()=>window.open(web,"_blank")}>Go to github webdev</button>
      </div>
     
</div>
      
      <button onClick={moveAbout}>About page</button>
      <br />
      <br />
      <button onClick={moveHome}>Home page</button>
    </div>
  )
}

export default Project_page
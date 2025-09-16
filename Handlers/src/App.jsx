import React from 'react';
import './App.css'
import { useState } from 'react';
import Togglelight from './Components/Togglelight'
import ColorSwitch from './Components/colorSwitch';

function App() {

  const[click,setClick]=useState(0);

  function handleClickoutside(){
    setClick(c=>c+1);
  }

  function getRandomcolors(){
    let r = 150+Math.round(100*Math.random());
    let g = 150+Math.round(100*Math.random());
    let b = 150+Math.round(100*Math.random());
    return `rgb(${r},${g},${b})`;
  }

  function handleColors(){
    let body=document.body.style;
    body.backgroundColor = getRandomcolors();
  }

  function handleClick(){
    alert("You have clicked");
  }

  return (
    <>
      <div>
      {<button onClick={handleClick}>Click me!</button> }
      { <button onClick={()=>alert("This is some text i m redering to my web page")}>Click me!</button> }

   <Togglelight/>



<ColorSwitch  onClick={handleClickoutside} onChangecolor={handleColors}>
<h2>Clicks on the page:{click}</h2>
</ColorSwitch>
   
    </div>
     
     
    </>
  )
}

export default App

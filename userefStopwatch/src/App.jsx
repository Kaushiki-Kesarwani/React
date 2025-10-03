import { useRef, useState } from 'react';
import './App.css'

function App() {
const[timer,setTimer]=useState(0);
let timeRef=useRef(null);


function startTimer(){
  timeRef.current=setInterval(()=>{
    setTimer(timer=>timer+1)
  },1000)
}

function stopTimer(){
  clearInterval(timeRef.current);
 
}

function resetTimer(){
  stopTimer();
  setTimer(0);
}

  return (
    <>
    <div>
<h1>Stopwatch : {timer}seconds</h1>

<div className='btn'>
  <button onClick={startTimer}>Start</button>

<br />
<br />

<button onClick={stopTimer}>Stop</button>

<br />
<br />

<button onClick={resetTimer}>Reset</button>
</div>

    </div>

    </>
  )
}

export default App

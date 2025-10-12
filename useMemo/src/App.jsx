import { useMemo, useState } from 'react'
import './App.css'

function App() {
 const[count,setCount]=useState(0);
 const[input,setInput]=useState(0);

 function handleClick(){
  setCount(count+1);
 }

 function expensiveCalc(num){
  for(let i=0;i<=1000000000;i++){}
  return num*2;
 }



let square = useMemo(()=>expensiveCalc(input),[input]);
  return (
    <>
   
     <div>
      <button onClick={handleClick}>Increment</button>
      <div>
        count : {count}
      </div>
      <input type="number"
      placeholder='Enter number'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      
       />
       <br />
       square : {square}
     </div>
    </>
  )
}

export default App

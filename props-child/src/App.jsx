import { useState } from 'react'
import './App.css'
import Button from './Components/Button';
import Card from './Components/Card'
function App() {
  const[count , setCount]=useState(0);

  function handlerClick(){
    setCount(count+1);
  }
  return (
    <div>
      
      <Button incrementcount={handlerClick} text="click me">
      <h1>{count}</h1>
      </Button>
      
      {/* <Card name="palak kesarwani">

      <p>Hello palak.</p>
      <p>Hello Kaushiki.</p>
      </Card>
      <Card children="I am studying">
        <h5>Hello! How are u?</h5> 
      </Card> */}
    </div>
  )
}

export default App



import './App.css'
import Conditional from './Components/Conditional';
import Ternary from './Components/ternary';
import LogicalAnd from './Components/LogicalAnd';
function App() {


  return (
    <>
      <div className='name'>
      <h1>Conditional Rendering using if else statements</h1>
      <ul>
      <Conditional name="Hello palak" isName={true}/>
      </ul>
    
    <ul> 
      <Conditional name="Bye palak" isName={true}/>
    </ul>
   
   <ul>
   <Conditional name="Goodnight palak" isName={false} />
   </ul>

   <h1>Conditional Rendering using Ternary operator</h1>
   <ul>
    <Ternary name="Good Morning" isName={true} ></Ternary>
    </ul>

    <ul>
    <Ternary name="Good Afternoon" isName={true} ></Ternary>
    </ul>

    <ul>
    <Ternary name="Good night" isName={false} ></Ternary>
    </ul>
   
    <ul>
    <Ternary name="Namate and Bonjour" isName={false} ></Ternary>
    </ul>

<h1>Conditional Rendering using Logical And operator</h1>
 <ul><LogicalAnd name="This is logical And operator" isval={true}></LogicalAnd></ul>
    
    <ul><LogicalAnd name="This logical is represented by And(&&) symbol" isval={true}></LogicalAnd></ul>
    
    <ul> <LogicalAnd name="This logical And operator tell if any condition is false it returns false" isval={true}></LogicalAnd></ul>
   
   <ul><LogicalAnd name="This logical And operator tell if all condition is true it returns true" isval={true}></LogicalAnd></ul> 
    
      </div>
     
    </>
  )
}

export default App

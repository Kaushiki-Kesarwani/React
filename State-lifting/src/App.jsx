

import { useState } from 'react'
import './App.css'
import Panel from './Components/panel';
import State from './Components/State_lifting';

function App() {
const[name,setName]=useState('');

function handleInput(e){
  setName(e.target.value);
}
const[sync,setSync]=useState(0);

  return (
    <>
      <div>
        <State title="State1" name={name} onChange={handleInput}/>
        
        <State  title="State2" name={name} onChange={handleInput}/>
        <p>This is inside parent see the value of name:{name}</p>




<h2>React application</h2>
<Panel
 sync={sync === 0}
 onClick={()=> setSync(0)}
>
  In a React application, many components will have their own state. Some state may “live” close to the leaf components (components at the bottom of the tree) like inputs. Other state may “live” closer to the top of the app.
</Panel>

 <h2>Single source of truth</h2>
<Panel
 sync={sync === 1}
 onClick={()=> setSync(1)}
>
For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”. 
</Panel>

 <h2>State</h2>
<Panel
 sync={sync === 2}
 onClick={()=> setSync(2)}
>Your app will change as you work on it. It is common that you will move state down or back up while you’re still figuring out where each piece of the state “lives”. This is all part of the process!
</Panel>
      </div>
   
    </>
  );
}

export default App

// import { useState } from 'react' 


// import Variation2 from './Components/Variation2'
// import Variation3 from './Components/Variation3'
import Variation4 from './Components/Variation4'
import LoggerComponent from './Components/LoggerComponent'
import Timer from './Components/Timer'
import Datafetcher from './Datafetcher'

function App() {
// const[name,setName]=useState('');
// useEffect(
//  ()=>{alert("This will run on every render")} 
// )

  return (
    <>
      <div>
       {/* <button onClick={()=>alert("This is alert")}>Button</button>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value) }placeholder="Enter your name"/> */}
{/* <Variation2/> */}
{/* <Variation3/> */}
{/* <Variation4/>  */}
{/* <LoggerComponent/> */}
< Datafetcher/>

      </div>
      
    </>
  )
}

export default App


import './App.css'
// import Handler from './Components/handler'
// import PassHandler from './Components/PassHandler'
// import Toolbar from './Components/Toolbar'
// import Signup from './Components/signup'
import Togglelight from './Components/Togglelight'

function App() {

  return (
    <>
      <div>
      {/* <button onClick={handleClick}>Click me!</button> */}
      {/* <button onClick={()=>alert("This is some text i m redering to my web page")}>Click me!</button> */}
{/* <Handler></Handler> */}
{/* <Handler message="playing">play</Handler>
<Handler message="Watching movie">movie</Handler>

<PassHandler onClick={()=>{alert("playing kiki's Delivery service")}}>movie</PassHandler>

<PassHandler onClick={()=>{prompt("Enter the name of your favourite game")
alert("Game Loading.....")

}}>game</PassHandler>

 <Toolbar handleonClickpar={()=>  alert("I am child,See how event bubbles")}/>
<Toolbar handleonClick={()=>alert("I am child,See how event bubbles")}/> 
<Signup/> */}

   <Togglelight/>
    </div>
     
     
    </>
  )
}

export default App

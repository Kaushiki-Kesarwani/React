
import './App.css'
import Proj from './Components/proj'
import Proj2 from './Components/proj2'
function App() {

  return (
    <>
      <div>
       <h1>Show importance</h1>
       <ul> <Proj name="Palak" importance={6}></Proj></ul>
       <ul> <Proj name="Kaushiki" importance={3}></Proj></ul>
       <ul> <Proj name="AnotherName" importance={0}></Proj></ul>
    
<h1>Drink</h1>
<Proj2 name="Tea"/>
<Proj2 name="Coffee"/>

      </div>
       
    </>
  )
}

export default App

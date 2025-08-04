
import './App.css'
import UserCard from './Components/UserCard'
import Holi from './assets/Holi.jpeg'
import Nature from './assets/Nature.jpeg'
import Diwali from './assets/Diwali.jpeg'
import Beautiful from './assets/Beautiful.jpeg'
function App() {


  return (
    
      <div className='container'>
    <UserCard name="Holi" image={Holi}/>
    <UserCard name="Nature" image={Nature}/>
    <UserCard name="Diwali" image={Diwali}/>
    <UserCard name="Beautiful" image={Beautiful}/>
    
      </div>
     
    
  )
}

export default App

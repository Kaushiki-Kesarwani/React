

import { createContext, useState } from 'react'

import ChildA from './Components/ChildA';
import './App.css'
//Step1:Create context
const UserContext=createContext();
const ThemeContext=createContext();

//Step2:Wrap all child inside a provider
//Step3:Pass value
//Step4:Consume


function App() {
  const [theme,setTheme]=useState('light');
  const[user,setUser]=useState({name:"Palak"});

  return (
    <>
   
        <UserContext.Provider value={user}> 
        <ThemeContext.Provider value={{theme,setTheme}}>
        <div>
          <ChildA/>
          </div>
        </ThemeContext.Provider>
        
        </UserContext.Provider>
      
    
      
     
    </>
  );
}

export default App
export {UserContext};
export {ThemeContext};
import React, { useContext } from 'react'

import { UserContext } from '../App'
import { ThemeContext }  from '../App'
import './child.css';
const ChildC = () => {
    const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext);

    let body=document.body;
    function toggleTheme(){
      if(theme==='light'){
        setTheme('dark');
        body.style.backgroundColor="#504d52ff";
      }else{
        setTheme('light');
        body.style.backgroundColor="#ac7e6dff"; 
      }
    }
  return (
    <div className='user'>
    data: {user}
    <br />
    <button className='btn' onClick={toggleTheme}>ToggleTheme</button>
    </div>
  )
}

export default ChildC

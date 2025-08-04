import React, { useContext } from 'react'

import { UserContext } from '../App'
import { ThemeContext }  from '../App'

const ChildC = () => {
    const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext);

    let body=document.body;
    function toggleTheme(){
      if(theme==='light'){
        setTheme('dark');
        body.style.backgroundColor="brown";
      }else{
        setTheme('light');
        body.style.backgroundColor="orange"; 
      }
    }
  return (
    <div>
    data: {user.name}
    <br />
    <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )
}

export default ChildC

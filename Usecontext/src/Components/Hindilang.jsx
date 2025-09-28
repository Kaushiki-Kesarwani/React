import React, { useContext } from 'react'
import { switchLanguage } from '../App';
import './child.css'

const Hindilang = () => {

    const {lang,setLang}=useContext(switchLanguage);

    function changelang(){
        if(lang==="English"){
             
            setLang("Hindi");
            
        }else{
          
            setLang("English");
          
        }
    }
  return (
    <div className='box'>
     <h2>Switch Language</h2>

      {lang==="English"? "greet:Hello!👋": "greet:Namaste🙏"}
      
         <button className='button' onClick={changelang}>
     {lang}
         </button>
         <br />
        
              
    </div>
  )
}

export default Hindilang
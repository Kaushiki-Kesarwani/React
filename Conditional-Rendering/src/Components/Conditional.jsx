import React from 'react'
import './Conditional.css'

const Conditional = ({name,isName}) => {
  
  if(isName)
   return<div className='container'>
     <li>{name} ✅ </li>
     </div>
      
   return <div className="container">
          <li>{name}❌</li>
        </div>
     
}

export default Conditional
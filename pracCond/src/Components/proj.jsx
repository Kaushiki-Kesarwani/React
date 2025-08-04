import React from 'react'

const proj = ({name,importance}) => {
  return (
     <li id="item">
      {name} 
      {importance>0 && ' '}
      {importance>0 && <i> ('importance :' {importance})</i>}

   </li> 
  )
}

export default proj
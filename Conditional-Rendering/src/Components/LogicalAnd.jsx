import React from 'react'

const LogicalAnd = ({name,isval}) => {

  return (
   <div>
     {isval && <li>{name}</li> }
  </div>
  )
}

export default LogicalAnd
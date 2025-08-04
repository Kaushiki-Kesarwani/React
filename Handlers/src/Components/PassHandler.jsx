import React from 'react'

const PassHandler = ({onClick,children}) => {
  return (
    <div>
    <button onClick={onClick}>{children}</button>  
    </div>
  )
}

export default PassHandler

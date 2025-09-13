import React from 'react'

const State_lifting = ({title,onChange,name}) => {
  return (
    <div>
      {title}
      {'  '}
      <input type='text' value={name} onChange={onChange}/>
    
    </div> 
  )
}

export default State_lifting

import React from 'react'

const State_lifting = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=>{props.setName(e.target.value)}}/>
      <p>Name state value inside {props.title}:{props.name}</p>
    </div> 
  )
}

export default State_lifting

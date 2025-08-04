import React from 'react'
import './Card.css'
const Button = (props) => {
  return (
    <div className='btn'>
      {props.children}
      <button id="clicking"onClick={props.incrementcount}>
        {props.text}
      </button>
      </div>
  )
}

export default Button

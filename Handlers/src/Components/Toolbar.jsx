import React from 'react'

const Toolbar = ({handleonClick,handleonClickpar}) => {

  return (
    
    <div className='bubble' onClick={handleonClickpar}>

    <button id="btn1" onClick={e =>{
      e.stopPropagation();
      handleonClick();
    }}>click me</button>
   </div>
  )
}

export default Toolbar
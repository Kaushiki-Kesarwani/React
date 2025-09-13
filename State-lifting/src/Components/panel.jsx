import React from 'react'

import './panel.css'

const panel = ({sync,onClick,children}) => {
  return (
    <div>
        <section className='liftup'>
            {sync?<p>{children}</p>:( <button onClick={onClick}>show</button>)}
            
        </section>
            
           
        
    </div>
  )
}

export default panel
import React from 'react'

const Panel = ({title,children,isActive,onShow}) => {
  return (
    <section className='Panel'>
        <h3>{title}</h3>
        {isActive? (<p>{children}</p>):(<button onClick={onShow}>show</button>)
}
    </section>
  );
}

export default Panel

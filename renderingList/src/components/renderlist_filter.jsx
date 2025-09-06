import React from 'react'

const Renderlist_filter = ({newlist}) => {

    const chemist=newlist.filter(person=>person.profession==='chemist');

    const arr=chemist.map(chem=><li key={chem.id}>
     {chem.name}   
         </li>);
  return (
    <div>
      <ul>{arr}</ul>
    </div>
  )
}

export default Renderlist_filter
import React from 'react'

const Renderlist_filter = ({newlist,children}) => {
  console.log(newlist);
    const chemist=newlist.filter(person=>person.profession==='chemist');

    const arr=chemist.map(chem=><li >
    
        <p>{chem.name}</p>   
         </li>);
  return (
    <div>
      <ul>{children}{arr}</ul>
    </div>
  )
}

export default Renderlist_filter
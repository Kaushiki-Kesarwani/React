import React from 'react'

const Renderlist = ({list}) => {
    const listitem=list.map(person=><li key={person.id}>{person.name}</li>);
  return (
    <ul>{listitem}</ul>
  )
}

export default Renderlist












import React from 'react'

const RenderFruitslist = ({fruits}) => {
    const listfruits = fruits.map(fr=><li key={fr.id}>{fr.fruit}</li>);
  return (
    <div><ul>{listfruits}</ul></div>
  )
}

export default RenderFruitslist
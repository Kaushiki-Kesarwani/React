import React from 'react'

const ternary = ({ name, isName }) => {
  return <div className="item">{isName ?<li> {name} ✅</li> :<li> {name}❌</li>}</div>
}

export default ternary

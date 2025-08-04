import React from 'react'

import "./UserCard.css"
const UserCard = (props) => {
  return (

    <div className='user-container'>
      <div id='card'>
      <p id="title">{props.name}</p>
      <img id="user-img" src={props.image} alt={props.image} />
      <p id="user-desc">Description of palak Kesarwani</p>
    </div>
    </div>
  )
}

export default UserCard

import React from 'react'

const  NumberList = ({nums}) => {
   

 const square=nums.map(number=><li>{number} = {number*number}</li>);
  return (
    <div> <ul>{square}</ul></div>
  )
}

export default NumberList
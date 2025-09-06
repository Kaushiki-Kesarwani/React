import React from 'react'

const Marks = ({stu}) => {
const pass=stu.filter(s=> s.marks>50);

const res=pass.map(s=>
    <li key={s.id}>
        {s.name} , <b>{s.marks}</b>
        </li>
);
  return (
    <div><ul>{res}</ul></div>
  )
}

export default Marks
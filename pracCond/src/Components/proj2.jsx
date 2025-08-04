import React from 'react'

const proj2 = ({name}) => {
let part,caffeine,age;
if(name === "Tea"){
part = 'leaf';
caffeine = '15–70 mg/cup'
age = '4,000+ years';

}
else if(name === "Coffee"){
    part = 'beans';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
}

  return (
    <div>
        <h1>{name}</h1>
        <dl>
            <dt>
                <dd>Parts of plants</dd>
                <dt>{part}</dt>
                <dd>Caffeine content</dd>
                <dt>{caffeine}</dt>
                <dd>Age</dd>
                <dt>{age}</dt>
            </dt>
        </dl>
    </div>
  )
}

export default proj2

import Renderlist from './components/renderlist'
import Renderlist_filter from './components/renderlist_filter';
 import RenderFruitslist from './components/renderFruitslist';
 import NumberList from './components/ numberList';
 import Marks from './components/Marks';
 import Delete from './components/Delete';
import './App.css'

function App() {
  const listItems=[{id : 1, name:'palak ', profession : 'Engineer'},
                   {id : 2, name:'mahek ', profession : ' python dev'},
                   {id : 3, name:'ansh ', profession : ' mechanicalEngineering'}];

  const newlist=[{id : 3 , name:'Creola Katherine Johnson', profession:'mathematician',},
    {id : 5 ,name : 'Mario José Molina-Pasquel Henríquez', profession:'chemist'},
    {id : 7 , name:'Percy Lavon Julian',profession: 'chemist' }
   ]

   const fruits=[{id:1,fruit:"apple"},{id:2,fruit:"banana"},{id:3,fruit:"grapes"},{id:4,fruit:"kiwi"},{id:5,fruit:"orange"},{id:6,fruit:"pineapple"},{id:7,fruit:"chikoo"},{id:8,fruit:"muskmelon"}];

   const nums=[1,2,3,4,5,6,7,8,9,10];

   const stu=[{id : 101,name:"kaushiki",marks:90},
    {id : 102,name:"kavya",marks:80},
  {id : 103, name:"nisha",marks:45},
{id : 104, name:"rohan",marks:73}];


  return (
    <>
<h2>Names and Professions</h2>
     { <Renderlist list={listItems}/> }

<br /> 

     <h2>Chemists are:</h2>
     <Renderlist_filter newlist={newlist}/>

<br />
<h2>Fruits List:</h2>
<RenderFruitslist fruits={fruits}/>

<br />
<h2>Square numbers</h2>
<NumberList nums={nums}/>

<br />
<h2>Higher bold marks</h2>
<Marks stu={stu}/>

<br />
<h2>Deleting elements</h2>
<Delete fruit={fruits}/>
    </>
  )
}

export default App

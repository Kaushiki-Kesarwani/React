
import Renderlist from './components/renderlist'
import Renderlist_filter from './components/renderlist_filter';
 
import './App.css'

function App() {
  const listItems=[{id : 1, name:'palak ', profession : 'Engineer'},
                   {id : 2, name:'mahek ', profession : ' python dev'},
                   {id : 3, name:'ansh ', profession : ' mechanicalEngineering'}];

  const newlist=[{id : 3 , name:'Creola Katherine Johnson', profession:'mathematician',},

    {id : 5 ,name : 'Mario José Molina-Pasquel Henríquez', profession:'chemist'},

    {id : 7 , name:'Percy Lavon Julian',
  profession: 'chemist', }
   ]
  return (
    <>
     {/* <Renderlist list={listItems}/> */}
     <Renderlist_filter newlist={newlist}>
    chemists are:
    </Renderlist_filter>
    </>
  )
}

export default App

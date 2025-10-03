
import { useRef } from 'react'
import './App.css'

function App() {
  const imgref=useRef(0);

  function scrollToindex(index){
    const listnode=imgref.current;
    const imgnode=listnode.querySelectorAll(' li>img ')[index];
    imgnode.scrollIntoView({
       behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  return (
    <>
    <nav>
      <button onClick={()=>scrollToindex(0)}>Neo</button>

        <button onClick={()=>scrollToindex(1)}>Millie</button>

          <button onClick={()=>scrollToindex(2)}>Bella</button>

          <button onClick={()=>scrollToindex(3)}>Cat</button>

              <button onClick={()=>scrollToindex(4)}>Daisy</button>
    </nav>

    <div>
      <ul ref={imgref}>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpx8oEowb0GhGeRZfbC8thpYwWc01efY88A&s" alt="Neo" />
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE1YWwWr8YSaJkXQFgpx54QGIBapHyzq2Yw&s" alt="Millie" />
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGgzZs1VWZp_Af_75qahh3Yyev7n-gpnJbQ&s" alt="Bella" />
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7TOBeO4pVOfMbPYVyV0R7NDBcce1JemcZQ&s" alt="cat" />
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCyv7WJ6ewVce_dLdB3yw7f9t5dxsQLpMNA&s" alt="daisy" />
        </li>
      </ul>
    </div>
   
    </>
  )
}

export default App

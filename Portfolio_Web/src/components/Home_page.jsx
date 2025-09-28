import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './home.css'

const Home_page = ({image}) => {
  const about=useNavigate();
  const project=useNavigate();

  function handleAbout(){
    about("/about");
  }

  function handleProject(){
    project("/project");
  }
  return (
    <div className='content'><h1 id='h1'>Home</h1>
        {/* <ul>
            <li>
                <NavLink to="/about">About_page</NavLink>
                </li>
                <li>
                    <NavLink to="/project">Project page</NavLink>
                </li>
        </ul> */}

<img  id = "image" src={image} alt={image} />
<p id="para">Hello! My name is Kaushiki kesarwani <br />and I'm Learning react.</p>
<br />
        <button onClick={handleAbout}>About page</button>
        <br />
        <br/>
          <button onClick={handleProject}> Project page</button>
    </div>
  )
}

export default Home_page
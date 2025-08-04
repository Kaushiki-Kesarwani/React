import React from 'react'
import Homepage from './Homepage'
import About from './About'
import Dashboard from './Dashboard'
import "./Navbar.css";

import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' className={({isActive})=>isActive? "active-link":""}
                >Home</NavLink> 
            </li>
        </ul>

        <ul>
            <li>
                <NavLink to='/About' className={({isActive})=>isActive? "active-link":""}>About</NavLink> 
            </li>
        </ul>

        <ul>
            <li>
                <NavLink to='/Dashboard' className={({isActive})=>isActive? "active-link":""}>Dashboard</NavLink> 
            </li>
        </ul>
    </div>
  )
}

export default Navbar
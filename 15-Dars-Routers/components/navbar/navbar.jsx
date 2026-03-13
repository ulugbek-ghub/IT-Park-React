import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to={"/"}>Dashboard</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/settings"}>Settings</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>

        </ul>
    </nav>
  )
}

export default Navbar

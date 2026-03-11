import React from 'react'


const Navbar = ({children}) => {
  return (
    <div>
        <ul>
            <NavLink to={"/"}>Dashboard</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/settings"}>Settings</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>

        </ul>
    </div>
  )
}

export default Navbar

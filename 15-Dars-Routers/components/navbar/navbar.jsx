import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/users/1">Users Details</NavLink>
        </ul>
      </nav>
      <div className="page-wrapper">
        {children}
      </div>
    </>
  )
}

export default Navbar
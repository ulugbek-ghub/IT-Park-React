import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} end>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Contact</NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
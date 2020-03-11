import React from "react";
import { NavLink } from 'react-router-dom';

import './style.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Shelter-Finder
      </a>
      <ul className="nav-links">
        <li>
          <NavLink to="/Shelters">Shelters</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

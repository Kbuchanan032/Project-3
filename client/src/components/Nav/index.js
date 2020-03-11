import React, {useContext} from "react";
import { NavLink } from 'react-router-dom';
import {AuthContext} from '../Context/auth-context';

import './style.css'

function Nav() {
  const auth = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Shelter-Finder
      </a>
      <ul className="nav-links">
        {auth.isLoggedIn && (
        <li>
          <NavLink to="/Shelters">Shelters</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        )}
        {!auth.isLoggedIn && (
          <li>
          <NavLink to="/auth">Sign in</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <button onClick={auth.logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;

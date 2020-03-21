import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './style.css'


export class Nav extends Component {
  state = {
    loggedIn: 'false'
  }
  componentWillMount() {
    localStorage.getItem('jwtToken') ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
    
    localStorage.getItem('user')
  }
  logOut = () => {
    localStorage.removeItem('jwtToken', 'user');
    window.location.replace('/');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Shelter-Finder
        </a>
        <ul className="nav-links">
            <li>
              <NavLink to="/">Shelters</NavLink>
            </li>
          {this.state.loggedIn ? (
          <li>
            <NavLink to="/users/:id">Profile</NavLink>
          </li>) : 
          ('')}
          {this.state.loggedIn ? 
            (<li>
              <a onClick={this.logOut}>Logout</a>
            </li>) : 
            (<li>
              <NavLink to={`/signin`}>Sign In</NavLink>
             </li>)
          }
          
        
        </ul>
      </nav>
    );
  };
};
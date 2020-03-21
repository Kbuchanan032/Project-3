import React, {Component} from "react";
import { Link } from 'react-router-dom'
import API from "../../utils/API";
import Button from '../Button'
import './style.css';


export class ProfileHeader extends Component {
  state = {
    user: `${localStorage.getItem('user')}`,
    data: {}
  }

  componentDidMount() {
    this.loadUserInfo()
  } 

  loadUserInfo = () => {
    API.getUserById(this.state.user).then(res => this.setState({data: res  }))
    console.log(this.state.data)
  }

  render() {
    return (
      <div
        style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center"}}
        className="jumbotron jumbotron-fluid"
      >
        <h1>username</h1>
      </div>
    );
  }
};
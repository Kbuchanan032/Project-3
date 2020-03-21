import React, {Component} from "react";
import { Link } from 'react-router-dom'
import API from "../../utils/API";
import Button from '../Button'
import './style.css';


export class Jumbotron extends Component {
  state = {
    user: `${localStorage.getItem('user')}`,
    guestContent: ['WELCOME TO SHELTER FINDER', "It's nice to meet you!"],
    authContent: ['WELCOME BACK TO SHELTER FINDER', 'Hello again!']
  }
  componentDidUpdate() {
   this.state.user !== '' ? API.getUserById(this.state.user).then(res => this.setState({userName: res.firstName  })) : this.setState({userName: ''})
  } 

  render() {
    return (
      <div
        style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center"}}
        className="jumbotron jumbotron-fluid"
      >
        <h2>
          {this.state.user !== '' ? this.state.authContent[1] : this.state.guestContent[1]}
        </h2>
        <h1>
          {this.state.user !== '' ? this.state.authContent[0] : this.state.guestContent[0]}
        </h1>
        {this.state.user !== '' ?  ('') :
          (<Link to='/signup'>
            <Button>
              <h3>CREATE USER ACCOUNT</h3>
            </Button>
          </Link>
          )
         }
      </div>
    );
  }
};



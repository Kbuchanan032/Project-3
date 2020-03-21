import React, {Component} from "react";
import API from "../../utils/API";
import {Row, Col} from '../Grid';
import './style.css';


export class ProfileHeader extends Component {
  state = {
    user: `${localStorage.getItem('user')}`,
    userData: ''
  }

  componentDidMount() {
    this.loadUserInfo()
  } 

  loadUserInfo = () => {
    API.getProvidersById(this.state.user).then(result => this.setState({userData: result.data}))
  }

  render() {
    return (
      <div
        style={{ height: 500, clear: "both", textAlign: "center"}}
        className="jumbotron jumbotron-fluid" id='profile-header'
      >
        <Row>
          <Col size='md-3'>
            <img src={this.state.userImg ? this.state.userImg : 'https://via.placeholder.com/250'}  alt='username'></img>
          </Col>
          <Col size='md-9'>
            <h1>{this.state.userData.firstName} {this.state.userData.lastName}</h1>
          </Col>
        </Row>
      </div>
    );
  }
};
import React, { useState, useContext, Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody } from '../Card';
import { Input, FormBtn } from '../Form/index';
import Button from '../Formelements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../utils/validators';
import { useForm } from '../Form/form-hook';
import {AuthContext} from '../Context/auth-context';



class UserSignUp extends Component {
  state = {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Submit Button Clicked')
    if (this.state.name && this.state.email) {
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })

        .catch(err => console.log(err));
    }
  }

  render() {
    return(
      <Card className="authentication">
        <CardHeader>
          <h3>Sign Up</h3>
        </CardHeader>
        <CardBody>
          <form>
            <Input
              name="name"
              type="name"
              value={this.state.name}
              validators={[VALIDATOR_REQUIRE()]}
              onChange={this.handleInputChange}
            />
            <Input
              name="email"
              type="email"
              value={this.state.email}
              validators={[VALIDATOR_EMAIL()]}
              onChange={this.handleInputChange}
            />
            <Input
              name="password"
              type="password"
              value={this.state.password}
              validators={[VALIDATOR_MINLENGTH(5)]}
              onChange={this.handleInputChange}
            />
            <FormBtn type="submit" onClick={this.handleFormSubmit}>
              <h4>Sign Up!</h4>
            </FormBtn>
          </form>
          <Link to='/users/login'>
            <FormBtn>
              <h4>Already registered? Sign in!</h4>
            </FormBtn>
          </Link>
          
        </CardBody>
      </Card>
    )
  }
}

export default UserSignUp
import React, { useState, useContext, Component } from 'react';

import { Card, CardHeader, CardBody } from '../components/Card';
import Input from '../components/Formelements/Input';
import Button from '../components/Formelements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../utils/validators';
import { useForm } from '../components/Form/form-hook';
import {AuthContext} from '../components/Context/auth-context';
import './Auth.css';


class UserSignUp extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.fullName && this.state.email) {
      API.saveUser({
        name: this.state.title,
        email: this.state.author,
        password: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
          <form onSubmit={this.handleSubmit}>
            {!isLoginMode && (
              <Input
                element="input"
                id="name"
                type="text"
                label="Your Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a name."
                onInput={inputHandler}
              />
            )}
            <Input
              element="input"
              id="email"
              type="email"
              label="E-Mail"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address."
              onInput={inputHandler}
            />
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid password, at least 5 characters."
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              {isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </Button>
          </form>
          <Button inverse onClick={switchModeHandler}>
            SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
          </Button>
        </CardBody>
      </Card>
    )
  }
}
import React from 'react';

import Card from '../components/Card/Card';
import Input from '../components/Formelements/Input';
import Button from '../components/Formelements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDTOR_MINLENGTH
} from '../utils/validators';
import './Auth.css';

const Auth = () => {
  return <Card className="authentication">
    <h2>Login Required </h2>
    <hr/>
    <form>
       <Input 
       element="input" 
       id="email" 
       type="email" 
       label="E-Mail" 
       validators={[VALIDATOR_EMAIL()]} 
       errorText="Please enter a valid email address."
       />
    </form>
  </Card>

};


export default Auth;
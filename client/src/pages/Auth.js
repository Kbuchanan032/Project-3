import React, { useState, useContext } from 'react';

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

import UserSignUp from '../components/UserSignUp'

const Auth = () => {
   
  const auth = useContext(AuthContext);  

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <UserSignUp>

    </UserSignUp>
  );
};

export default Auth;

import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../utils/API';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from '../components/Grid';
import { Card, CardHeader, CardBody } from '../components/Card';
import Button from '../components/Button';

import './assets/SignIn.css'

export const UserSignIn = () => {
  const [message, setMessage] = React.useState('');
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required'),
      password: Yup.string()
        .min(5, 'Passwords are at least 5 characters')
        .required('Required')
    }),
    onSubmit: value => {
      const { email, password } = value;
      API.userLogin(email, password).then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('user', result.data.user);
        setMessage({ message: 'Succesful Login' });
        history.push('/')
        window.location.reload()
      })
      .catch((error) => {
        if(error) {
          setMessage({ message: 'Login failed. Username or password not match'})
        }
      });
    }
  });
  
  return(
    <Card className=' userSignIn'>
      <CardHeader>
        <h3>User Sign In</h3>
      </CardHeader>
      <CardBody>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input 
            id='email'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
          ) : null}
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type='submit'>Sign In</button>
        </form> 
        <Link to='/users/signup'>
          <p>Not registered yet? Sign up!</p>
        </Link>
      </CardBody>
    </Card>
  )
};

export const ProviderSignIn = () => {
  const [message, setMessage] = React.useState('');
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required'),
      password: Yup.string()
        .min(5, 'Passwords are at least 5 characters')
        .required('Required')
    }),
    onSubmit: value => {
      const { email, password} = value;
      API.providerLogin(email, password).then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('user', result.data.user);
        setMessage({ message: 'Succesful Login' });
        history.push('/')
        window.location.reload()
      })
      .catch((error) => {
        if(error) {
          setMessage({ message: 'Login failed. Username or password not match'})
        }
      });
    }
  });
  
  return(
    <Card className=' providerSignIn'>
      <CardHeader>
        <h3>Provider Sign In</h3>
      </CardHeader>
      <CardBody>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input 
            id='email'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
          ) : null}
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type='submit'>Sign In</button>
        </form>
        <Link to='/providers/signup'>
          <p>Not registered yet? Sign up!</p>
        </Link>
      </CardBody>
    </Card>
  )
};

export class SignIn extends Component {
  state = {

  }
  render() {
    return (
      <Card className=' SignUp'>
        <CardBody>
          <Row>
            <Col size='sm-6'>
              <Link to='/providers/signin'>
                <Button>
                  <h3>Provider Sign-In</h3>
                </Button>
              </Link>
            </Col>
            <Col size='sm-6'>
              <Link to='/users/signin'>
                <Button>
                  <h3>User Sign-In</h3>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Link to='/signup'>
              <h3 className='signUpRedirect'>Not a member yet? Sign up!</h3>
            </Link>
          </Row>
        </CardBody>
      </Card>
    );
  };
};


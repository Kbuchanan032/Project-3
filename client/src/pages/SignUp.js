import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../utils/API'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from '../components/Grid';
import { Card, CardHeader, CardBody } from '../components/Card';
import Button from '../components/Button';

import './assets/SignUp.css'

export const ProviderSignUp = () => {
  const [message, setMessage] = React.useState();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .required('Required')
    }),
    onSubmit: values => { 
      API.saveProvider(values).then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        setMessage('Succesful Login');
        history.push('/')}).catch(err => console.log(err))
    }
  })
  
  return (
    <Card className=' providerSignUp'>
      <CardHeader>
        <h3>Provider Sign Up</h3>
      </CardHeader>
      <CardBody>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input 
            id="firstName" 
            name="firstName"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName} 
          />
          {formik.errors.firstName && formik.touched.firstName ? ( <div>{formik.errors.firstName}</div>) : null}

          <label htmlFor='lastName'>Last Name</label>
          <input 
            id="lastName" 
            name="lastName"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName} 
          />
          {formik.errors.lastName && formik.touched.lastName ? ( <div>{formik.errors.lastName}</div>) : null}

          <label htmlFor='email'>Email</label>
          <input 
            id="email" 
            name="email"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} 
          />
          {formik.errors.email && formik.touched.email ? ( <div>{formik.errors.email}</div>) : null}

          <label htmlFor='password'>Password</label>
          <input 
            id="password" 
            name="password"
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} 
          />
          {formik.errors.password && formik.touched.password ? ( <div>{formik.errors.password}</div>) : null}
          <button type="submit">Sign Up</button>
        </form>

        <Link to='/providers/signin'>
          <p>Already a member? Sign in!</p>
        </Link>
      </CardBody>
  </Card>
  )
};

export const UserSignUp = () => {
  const [message, setMessage] = React.useState('');
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values)
      API.saveUser(values).then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        setMessage({ message: 'Succesful Login' });
        history.push('/')
      })
        .catch(err => console.log(err))
      
    },
  });
  return (
    <Card className=' userSignUp'>
      <CardHeader>
        <h3>User Sign Up</h3>
      </CardHeader>
      <CardBody>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type="submit">Sign Up</button>
        </form>
        <Link to='/users/signin'>
            <p>Already a member? Sign in!</p>
        </Link>
      </CardBody>
    </Card>
  );
};


export class SignUp extends Component {
  state = {

  }

  render() {
    return (
      <Card className=' SignUp'>
        <CardBody>
          <Row>
            <Col size='sm-6'>
              <Link to='/providers/signup'>
                <Button>
                  <h3>Provider Sign-Up</h3>
                </Button>
              </Link>
            </Col>
            <Col size='sm-6'>
              <Link to='/users/signup'>
                <Button>
                  <h3>User Sign-Up</h3>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Link to='/signin'>
              <h3 className='signInRedirect'>Already a member? Sign in!</h3>
            </Link>
          </Row>
        </CardBody>
      </Card>
    );
  };
};



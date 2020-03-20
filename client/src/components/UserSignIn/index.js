import React from 'react';
import API from '../../utils/API';
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card, CardHeader, CardBody } from '../Card';
import './style.css'


const UserSignIn = () => {
  const [message, setMessage] = React.useState('')
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      message: ''
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
        debugger
        setMessage({ message: 'Succesful Login' });
        history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
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
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
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
          <button type='submit'>Sign In</button>
        </form>
        
        
          
        <Link to='/users/signup'>
          <p>Not registered yet? Sign up!</p>
        </Link>
        
      </CardBody>
    </Card>
  )
}


export default UserSignIn;
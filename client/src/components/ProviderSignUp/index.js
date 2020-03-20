import React from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Card, CardHeader, CardBody} from '../Card'
import './style.css'

const ProviderSignUp = () => {
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
      API.saveProvider(values).catch(err => console.log(err))
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
}

export default ProviderSignUp;
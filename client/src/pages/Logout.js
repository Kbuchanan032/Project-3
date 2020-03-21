import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../utils/API';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from '../components/Grid';
import { Card, CardHeader, CardBody } from '../components/Card';
import Button from '../components/Button';

//import './assets/Logout.css'

export class Logout extends Component {
  state = {

  }

  componentWillMount() {
    API.logOut();
  }
  render() {
    return (
      <Card className=' Logout'>
        <CardBody>
          <Row>
            <Col size='sm-12'>
              <h5>You've been logged out.</h5>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  };
};


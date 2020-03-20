import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from '../Grid';
import { Card, CardBody } from '../Card';
import Button from '../Button'

import './style.css'

class SignIn extends Component {
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

export default SignIn;

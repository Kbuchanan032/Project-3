import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from '../Grid';
import { Card, CardBody } from '../Card';
import Button from '../Button'

import './style.css'

class SignUp extends Component {
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

export default SignUp;

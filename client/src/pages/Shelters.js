import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from '../components/Button'
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Card, CardHeader} from '../components/Card'
import { ResultsContainer, ShelterCard } from '../components/Results'
import './Shelters.css'

class Shelters extends Component {
  state = {
    shelters: []
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron> 
              <Button>
               <h3>CREATE USER ACCOUNT</h3> 
               
              </Button>
            </Jumbotron> 
          </Col>
        </Row>

        <Row>
          <Col size='sm-12'>
            <ResultsContainer>
              <h3 id='availability-header'>AVAILABILITY</h3>
              <Row>
                <Col size='sm-6'>

                  <ShelterCard 
                    img='https://via.placeholder.com/150x350' 
                    name='Shelter 1' 
                    address='123 N. Example Ln. Phoenix, AZ 85016' 
                    phone='602-111-1111' 
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    availability='7 beds available' />

                  <ShelterCard 
                    img='https://via.placeholder.com/150x350' 
                    name='Shelter 2' 
                    address='123 N. Example Ln. Phoenix, AZ 85016' 
                    phone='602-222-2222' 
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    availability='3 beds available' />
                 
                </Col>

                <Col size='sm-6'>
                  <h3> TO-DO: ADD MAP HERE</h3>
                
                </Col>
              </Row>
            </ResultsContainer>
            
            

            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Shelters;

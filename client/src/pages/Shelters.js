import React, { Component } from "react";

import { Jumbotron } from "../components/Jumbotron";

import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import { ShelterCard } from "../components/Results";
import MapContainer from "../components/Map/Map.js";

<<<<<<< HEAD
=======
import './assets/Shelters.css';
>>>>>>> 6c4e27c457ecf1fe350d9a3a9828c0d8c166710c

class Shelters extends Component {
  state = {
    shelters: []
  }
  componentDidMount() {
    this.loadShelters();
  }

  loadShelters = () => {
    API.getShelters()
    .then(res =>
      this.setState({ shelters: res.data })
    )
    .catch(err => console.log(err));
    console.log(this.state.shelters)
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size='sm-12'>
            <Card>
              <CardHeader>
                <h3 id='availability-header'>AVAILABILITY</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col size='sm-6'>
                    {this.state.shelters.map(shelter => (
                      <ShelterCard 
                      img={shelter.img} 
                      name={shelter.name} 
                      address={shelter.address} 
                      phone={shelter.phoneNumber}
                      description={shelter.description}
                      availability={shelter.availableBeds} 
                      
                      />
                    ))}
                  </Col>
                  <Col size='sm-6'>
                    <MapContainer />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Shelters;

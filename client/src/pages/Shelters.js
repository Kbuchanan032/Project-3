import React, { Component } from "react";

import { Jumbotron } from "../components/Jumbotron";

import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import { ShelterCard } from "../components/Results";
import MapContainer from "../components/Map/Map.js";

import './assets/Shelters.css';

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
                <h3 id='availability-header'>SHELTERS</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col size='sm-6'>
                    {this.state.shelters.map(shelter => (
                      <ShelterCard 
                      key={shelter._id}
                      img={shelter.img} 
                      name={shelter.name} 
                      address={shelter.address} 
                      phone={shelter.phoneNumber}
                      description={shelter.description}
                      availability={shelter.availableBeds} />
                    ))}
                  </Col>
                  <Col size='sm-6'>
                    <MapContainer></MapContainer>
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

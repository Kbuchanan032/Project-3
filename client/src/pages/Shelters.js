import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import { ShelterCard } from "../components/Results";
import "./Shelters.css";
import MapContainer from "../components/Map/Map.js";

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
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h2>
                It's nice to meet you!
              </h2>
              <h1>
                WELCOME TO SHELTER FINDER
              </h1>
              <Link to='/signup'>
                <Button>
                  <h3>CREATE USER ACCOUNT</h3>
                </Button>
              </Link>
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

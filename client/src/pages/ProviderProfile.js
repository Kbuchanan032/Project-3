import React, { Component } from "react";

import { ProfileHeader } from "../components/ProfileHeader";

import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import { ShelterCard } from "../components/Results";
import MapContainer from "../components/Map/Map.js";

import './assets/Shelters.css';

export class ProviderProfile extends Component {
  state = {
    shelters: [],
    data: {}
  }
  componentWillMount() {
    API.getProvidersById(localStorage.getItem('user')).then(dbProvider => this.setState({data: dbProvider}))
  }
  componentDidMount() {
    
  }

  loadProviderShelters = () => {
    API.getProviderShelters()
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
            <ProfileHeader>

            </ProfileHeader>
          </Col>
        </Row>

        <Row>
          <Col size='sm-12'>
            <Card>
              <CardHeader>
                <h3 id='availability-header'>My Shelters</h3>
              </CardHeader>
              <CardBody>
                
                <Row>
                  <Col size='sm-12'>
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
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

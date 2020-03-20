import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardHeaderTabs, CardNavItem, CardBody} from '../components/Card'
import './Shelters.css'

import { ShelterCard } from '../components/Results'

import UserFavorites from '../components/UserFavorites'

class UserProfile extends Component {
  state = {
    userID: '5e73dedf06d96955805f9337',
    firstName: '',
    lastName: '',
    email: '',
    userImg: '',
    userFavorites: [],
    userReservations: [],
    userHistory: [],
    selectedView: 'favorites',
    selectedData: '', 
    selectedComponent: ''
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  loadUserInfo = () => {
    API.getUserById(this.state.userID)
    .then(res =>
      this.setState({  userID: res.data.userID, firstName: res.data.firstName, lastName:res.data.lastName, email: res.data.email, userImg: res.data.img, userFavorites: res.data.favorites, userReservations: res.data.reservations, userHistory: res.data.stayHistory })
    )
    .catch(err => console.log(err));
  }

  selectView = view => {
    this.setState({selectedView: view})
    if (this.state.selectedView === 'favorites') {
      this.setState({selectedData: this.state.userFavorites})
    } else if (this.state.selectedView === 'reservations') {
      this.setState({selectedData: this.state.userReservations})
    } else {
      this.setState({selectedData: this.state.userHistory})
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size='sm-12'>
            <Jumbotron>
              <img src={this.state.userImg} alt={this.state.userName}></img>
              <h3>{this.state.userName}</h3>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size='sm-12'>
            <Card className='text-center'>
              <CardHeader>
                <CardHeaderTabs>
                  <CardNavItem href='' label='Favorites' onClick={this.selectView('favorites')}>
                  </CardNavItem>

                  <CardNavItem href='' label='Reservations' onClick={this.selectView('reservations')}>

                  </CardNavItem>
                  <CardNavItem href='' label='History' onClick={this.selectView('history')}>

                  </CardNavItem>
                </CardHeaderTabs>
              </CardHeader>
              <CardBody selectedView={this.state.selectedView} userID={this.state.userID} data={this.state.selectedData}>
                {this.state.selectedData.length ? this.state.selectedData.map(data => 
                  <ShelterCard
                    img={data.img} 
                    name={data.name} 
                    address={data.address} 
                    phone={data.phoneNumber}
                    description={data.description}
                    availability={data.availableBeds} />
                ) : 'Nothing to Show Yet'}
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserProfile;
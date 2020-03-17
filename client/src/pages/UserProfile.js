import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardHeaderTabs, CardNavItem, CardBody} from '../components/Card'
import './Shelters.css'

class UserProfile extends Component {
  state = {
    userID: '',
    userName: '',
    userImg: '',
    userFavorites: [],
    userReservations: [],
    userHistory: [],
    selectedView: ''
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  loadUserInfo = () => {
    API.getUserInfo()
    .then(res =>
      this.setState({  userID: res.data.userID, userName: res.data.name, userImg: res.data.img, userFavorites: res.data.favorites, userReservations: res.data.reservations, userHistory: res.data.stayHistory })
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
                  <CardNavItem href='' label='Favorites' className={this.state.selectedView === 'favorites' ? ' active' : ''} onClick={this.selectView('favorites')}>
                  </CardNavItem>

                  <CardNavItem href='' label='Reservations' className={this.state.selectedView === 'reservations' ? ' active' : ''}onClick={this.selectView('reservations')}>

                  </CardNavItem>
                  <CardNavItem href='' label='History' className={this.state.selectedView === 'history' ? ' active' : ''} onClick={this.selectView('history')}>

                  </CardNavItem>
                </CardHeaderTabs>
              </CardHeader>
              <CardBody selectedView={this.state.selectedView} userID={this.state.userID} data={this.state.selectedData}>

                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserProfile;
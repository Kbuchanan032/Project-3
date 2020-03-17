import React, { Component } from "react";
import API from '../../utils/API'
import { ShelterCard } from '../Results';

class UserFavorites extends Component {
  state = {
    userID: this.props.userID,
    userFavorites: []
  } 

  componentDidMount() {
    this.loadUserFavorites(this.state.userID);
  }

  loadUserFavorites = id => {
    API.getUserFavorites(id)
    .then(res =>
      this.setState({ userFavorites: res.data })
    )
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card-deck">
        {this.state.userFavorites.map(shelter => (
          <ShelterCard img={shelter.img} name={shelter.name} address={shelter.address} phone={shelter.phoneNumber} description={shelter.description} availability={shelter.availableBeds}>

          </ShelterCard>
        ))}
      </div>  
    )
  }
}

export default UserFavorites;

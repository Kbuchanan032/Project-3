import React, { Component } from "react";
import API from '../../utils/API'
import { ShelterCard } from '../Results';

class UserFavorites extends Component {
  state = {
    userID: this.props.userID,
    userFavorites: this.props.data
  } 

  render() {
    return (
      <div className="card-deck">
        {this.state.userFavorites ? this.state.userFavorites.map(shelter => (
          <ShelterCard img={shelter.img} name={shelter.name} address={shelter.address} phone={shelter.phoneNumber} description={shelter.description} availability={shelter.availableBeds}>

          </ShelterCard>
        )) : 'no favorites'}
      </div>  
    )
  }
}

export default UserFavorites;

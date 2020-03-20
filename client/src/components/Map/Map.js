import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
<<<<<<< HEAD
import { Map, GoogleApiWrapper } from "google-map-react";
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY;
=======

require('dotenv').config()

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
>>>>>>> 82a366de188a56a0b13a37e94b1198bdc5d4f3e5

console.log(API_KEY);

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 32.3115,
      lng: -110.9792 
    },
    zoom: 8
  };
  render() {
    return (        
      <div style={{ height: "100vh", width: "100%", position: "center" }}>
          <GoogleMapReact 
            bootstrapURLKeys={{key: API_KEY}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
          </GoogleMapReact>
        </div>
    );
  }
}

export default MapContainer;

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

require('dotenv').config()

const API_KEY = process.env.REACT_APP_MAP_API_KEY;

console.log(API_KEY);


class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 32.3115,
      lng: -110.9792 
    },
    zoom: 8,
    request: {
      location: {
        lat: 32.3115,
        lng: -110.9792 
      } ,
      radius: 500,
      keyword: ['homeless shelter']
    }
  };

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  render() {
    return (
        <div style={{ height: "100vh", width: "100%", position: "center" }}>
          <GoogleMapReact 
            bootstrapURLKeys={{key: API_KEY}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}>
          </GoogleMapReact>
        </div>
    );
  }

  
}

export default MapContainer;

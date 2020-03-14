import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const API_KEY = process.env.REACT_APP_MAP_API_KEY;

console.log(API_KEY);

class MapContainer extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100%", position: "center" }}>
        <GoogleMapReact>
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 32.3115, lng: -110.9792 }}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: API_KEY })(MapContainer);

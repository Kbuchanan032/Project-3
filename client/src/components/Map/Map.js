import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Map, GoogleApiWrapper } from "google-maps-react";

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

export default GoogleApiWrapper({
  apiKey: "AIzaSyCHT6kGCz57OG9E5yTmi3M1x7U4MFa1dhQ"
})(MapContainer);

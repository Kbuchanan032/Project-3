import React, { Component, useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_MAP_API_KEY;

console.log(API_KEY);

//Our Javascript function to find the users Geolocation. All it really does is give the app their lng and lat
//but geolocation sounds cooler.
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function success(pos) {
  var crd = pos.coords;

  // console.log("Your current position is:");
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

//using react's useEffect function I'm able to pull in the Places api to render out places that match a keywork within 1500 meters
const app = () => {
  const instance = useRef(null);

  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.222607,-110.974709&radius=1500&type=homeless&keyword=shelter&key=API_KEY";

    instance.current.appendChild(scriptTag);
  }, []);
  return (
    <>
      <div ref={instance} />
    </>
  );
};
console.log(app);

//This is the map contanier from the google maps api
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 32.12104,
      lng: -110.93796
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent lat={32.20853} lng={-110.95663} text="St.Jose" />
          <AnyReactComponent
            lat={32.22566}
            lng={-110.97288}
            text="Tucson Homeless"
          />
          <AnyReactComponent
            lat={32.16958}
            lng={-110.91905}
            text="Center of Opp"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

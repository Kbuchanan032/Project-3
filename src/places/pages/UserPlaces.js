import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'The Salvation Army Hospitality House',
    description: 'One of the most famous shelters in Tucson!',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN09fE5Sa3Gsv38eRPWhjW6B-_BaTAIsoL8cGr0=w426-h240-k-no',
    address: '1002 N Main Ave, Tucson, AZ 85705',
    location: {
      lat: 32.220335,
      lng: -110.9387259
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Family Housing Resources Inc',
    description: 'One of the most famous shelters in the world!',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN6ksXcl33enRtfOzUFwrbg9iDwEcNdnUjjFkKZ=w408-h279-k-no',
    address: '3503 N Campbell Ave Suite 501, Tucson, AZ 85719',
    location: {
      lat: 32.220335,
      lng: -110.9387259
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
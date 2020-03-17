const axios = require('axios');

const HttpError = require('../models/http-error');

<<<<<<< HEAD
const {mykey} = require('../EndPoints/config')

//<script type='text/javascript' src='config.js'></script>


//var mykey = config.API_KEY;


=======
const API_KEY = '';
>>>>>>> 525a7cd7d6205efdea92dadba91d67f4b4acd125

async function getCoordsForAddress(address) {
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // };
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${mykey}`
  );

  const data = response.data;

  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;


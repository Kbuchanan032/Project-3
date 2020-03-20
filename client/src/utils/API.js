import axios from "axios";

export default {
  // Gets all shelters
  saveShelter: function(shelterData) {
    return axios.post('/api/shelters', shelterData)
  },
  getShelters: function() {
    return axios.get('/api/shelters')
  },
  getSheltersByProviderId: function(id) {
    return axios.get('/api/shelters/' + id);
  },
  saveUser: function(userData) {
    return axios.post('/api/auth/register/users', userData)
  },
  saveProvider: function(providerData) {
    return axios.post('/api/auth/register/providers', providerData)
  },
  getUserById: function(id) {
    return axios.get("/api/users/" + id);
  },
  userLogin: function(user, password) {
   return axios.post('/api/auth/login/users', {
       email: user,
       password: password
   })
  },
  providerLogin: function(provider, password) {
    return axios.post('/api/auth/login/providers', {
      email: provider,
      password: password
    })
  }
};

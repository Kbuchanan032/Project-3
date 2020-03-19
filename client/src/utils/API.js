import axios from "axios";
import passport from 'passport';

export default {
  // Gets all shelters
  getShelters: function() {
    return axios.get("/api/shelters");
  },
  saveUser: function(userData) {
    return axios.post('/api/users', userData)
  },
  saveProvider: function(providerData) {
    return axios.post('/api/providers', providerData)
  },
  userLogin: function(userData) {
    return axios.post('/api/users/login', userData)
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/shelters/" + id);
  },
  // Saves a book to the database
  saveBook: function(shelterData) {
    return axios.post("/api/shelters", shelterData);
  }
};

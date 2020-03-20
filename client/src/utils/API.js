import axios from "axios";

export default {
  // Gets all shelters
  getShelters: function() {
    return axios.get("/api/shelters");
  },
  saveUser: function(userData) {
    return axios.post('/api/auth/register', userData)
  },
  saveProvider: function(providerData) {
    return axios.post('/api/providers', providerData)
  },
  getUserById: function(id) {
    return axios.get("/api/users/" + id);
  },
  userLogin: function(user, password) {
    console.log(user)
   return axios.post('/api/auth/login', {
       email: user,
       password: password
   })
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

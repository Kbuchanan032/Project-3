import axios from "axios";

export default {
  // Gets all shelters
  getShelters: function() {
    return axios.get("/api/shelters");
  },
  saveUser: function(userData) {
    return axios.post('/api/users', userData)
  },
  getUserInfo: function (id) {
    return axios.get("/api/users/" + id)
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

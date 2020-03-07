import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/shelters");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/shelters/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/shelters/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/shelters", bookData);
  }
};

import axios from "axios";

// const herokuKey = {
//   apiKeyName: process.env.REACT_APP_API_KEY_KEY,
//   apiKeyCode: process.env.REACT_APP_API_KEY_VALUE
// }

const myKey = process.env.REACT_APP_API_KEY;
console.log("api key",myKey)



export default {
  getBookSearch: function (userSearch) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${myKey}`;
    return axios.get(URL).then(data => {
      // Data Work
      return data;
    }).catch(err => {
      console.error(err)
    })
  },

  getBooks: function() {
    return axios.get("/api/books");
  },
  insertBook: function(bookData) {
    return axios.post("/api/books", bookData)
  },
  deleteBook: function(id) {
    return axios.delete("/api/books" + id)
  },
  
}



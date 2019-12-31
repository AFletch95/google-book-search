import axios from "axios";


const myKey = process.env.REACT_APP_API_KEY;



export default {
  getBookSearch(userSearch) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${myKey}`;
    return axios.get(URL).then(data => {
      // Data Work
      return data;
    }).catch(err => {
      console.error(err)
    })
  },

  getBooks() {
    return axios.get("/api/books/");
  },
  insertBook(bookData) {
    return axios.post("/api/books/", bookData)
  },
  deleteBook(id) {
    return axios.delete("/api/books/" + id)
  },
  
}



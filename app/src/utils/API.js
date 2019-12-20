import axios from "axios";



const myKey = process.env.REACT_APP_API_KEY;
console.log("key", myKey)



export default {
  getBookSearch: function (userSearch) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${myKey}`;
    return axios.get(URL).then(data => {
      // Data Work
      return data;
    }).catch(err => {
      console.error(err)
    })
  }

}
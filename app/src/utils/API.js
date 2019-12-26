import axios from "axios";

const herokuKey = {
  apiKeyName: process.env.REACT_APP_API_KEY_KEY,
  apiKeyCode: process.env.REACT_APP_API_KEY_VALUE
}

const myKey = process.env.REACT_APP_API_KEY;



export default {
  getBookSearch: function (userSearch) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${myKey || herokuKey}`;
    return axios.get(URL).then(data => {
      // Data Work
      return data;
    }).catch(err => {
      console.error(err)
    })
  }

}
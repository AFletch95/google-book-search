import axios from "axios";
require("dotenv").config();

const userSearch = "";

const myKey = process.env.API_KEY;
const URL = "https://books.google.com/books?q=" + userSearch + "&key=" + myKey + "&";




export default {
  getBookSearch: function () {
    return axios.get(URL)
  }

}
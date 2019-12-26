const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    default: "Title Unknown",
    required: false
  },
  author: {
    type: String,
    default: "Author Unknown",
    required: false
  },
  description: {
    type: String,
    default: "No description avaliable",
    required: false
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },


});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    default: "Title Unknown",
    required: true
  },
  authors: {
    type: [String],
    default: "Author Unknown",
    required: true
  },
  description: {
    type: String,
    default: "No description avaliable",
    required: true
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },


});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
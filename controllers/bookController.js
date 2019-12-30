const Book = require("../models/Book");

bookController = {
  getBooks (req, res) {
    Book.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  insertBook (req, res){
    Book.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  deleteBook (req, res){
    Book.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  }
}

module.exports = bookController;
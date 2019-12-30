const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
  .get(bookController.getBooks)
  .post(bookController.insertBook)

router.route("/:id")
  .delete(bookController.deleteBook)

module.exports = router;
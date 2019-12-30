const express = require('express');
const path = require('path');
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// app.set("db", require("./models/books"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve static files from the React app
if (process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname, 'app/build')));

// connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true });

// routes
app.use(routes);
// // get all books in the database
// app.get("/api/books", bookController.getBooks)
// // save a book to the database
// app.post("/api/books",  bookController.insertBook)
// // delete a book from the database
// app.delete("/api/books/:id", bookController.deleteBook)


const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Listening on ${port}`);
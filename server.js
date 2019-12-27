const express = require('express');
const path = require('path');
const mongoose = require("mongoose")

const app = express();
const db = require("./app/models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve static files from the React app
if (process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname, 'app/build')));

// connect to mongo db
mongoose.connect("mongodb://localhost/savedBooksdb", { useNewUrlParser: true });
// routes



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './app/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);
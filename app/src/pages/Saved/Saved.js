import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import database from "../../utils/API";

const SavedPage = () => {

  useEffect(() => {
    getBooks();
  },[])
  
  // load saved books from database
  const getBooks = () => {
    database.getBooks()
    .then(result => {setSavedBooks(result.data)})
    .catch(err => console.error(err))
  }




  // delete book from database
  const deleteBook = (id) => {
    database.deleteBook(id)
    .then(getBooks())
    .catch(err => console.error("DELETE BOOK ERROR", err))
  }

  const [databaseButton] = useState("Delete")
  const [databaseButtonColor] = useState("btn btn-danger")

  const [savedBooks, setSavedBooks] = useState([])

  const [bookTitle] = useState("Unknown Title");
  const [bookAuthor] = useState("Unknown Author");
  const [bookLink] = useState("https://play.google.com/store/books/")
  const [bookImage] = useState("./book-image-placeholder.svg");
  const [bookDescription] = useState("No description avaliable.")
  return (
    <div id="savedPaged">
      <div className="container-fluid text-left" style={{ backgroundColor: "lightGray", padding: "1.5rem 1rem", width: "93vw", border: "solid black 1px" }}>
        <h4>Saved Books</h4>
        {/* BookCards go here */}
        {savedBooks.map(data => (
          <BookCard
            key={data._id}
            _id={data._id}
            bookTitle={data.title || bookTitle}
            bookAuthor={data.authors || bookAuthor}
            bookImage={data.image || bookImage}
            bookDescription={data.description || bookDescription}
            bookLink={data.link || bookLink}
            databaseButton={databaseButton}
            databaseButtonColor={databaseButtonColor}
            handleBookCardClick={deleteBook}
          />
        ))}
      </div>

    </div>
  )
}

export default SavedPage;
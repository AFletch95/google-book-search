import React, { useState } from "react";
import BookCard from "../../components/BookCard";

const SavedPage = () => {

  const [databaseButton] = useState("Delete")
  const [databaseButtonColor] = useState("btn btn-danger")

  const [bookTitle] = useState("Unknown Title");
  const [bookAuthor] = useState("Unknown Author");
  const [bookLink] = useState("google.com/books")
  const [bookImage] = useState("./book-image-placeholder.svg");
  const [bookDescription] = useState("No description avaliable.")
  return (
    <div id="savedPaged">
      <div className="container-fluid text-left" style={{ backgroundColor: "lightGray", padding: "1.5rem 1rem", width: "93vw", border: "solid black 1px" }}>
        <h4>Saved Books</h4>
        {/* BookCards go here */}
        <BookCard
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
          bookImage={bookImage}
          bookLink={bookLink}
          bookDescription={bookDescription}
          databaseButton={databaseButton}
          databaseButtonColor={databaseButtonColor}
        />
      </div>

    </div>
  )
}

export default SavedPage;
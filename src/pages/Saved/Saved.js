import React, { useState } from "react";
import BookCard from "../../components/BookCard";

const SavedPage = () => {

  const [databaseButton, setDatabaseButton] = useState("Delete")
  const [bookTitle, setBookTitle] = useState("Book Title");
  const [bookAuthor, setBookAutor] = useState("Book Author");
  const [bookImage, setBookImage] = useState("./book-image-placeholder.svg");
  const [bookDescription, setBookDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique tortor erat, in viverra lectus semper et. Nunc quis enim quam. Nam congue ultricies lobortis. Donec blandit massa et nibh viverra, rhoncus gravida sem vestibulum. Integer sollicitudin rutrum ipsum vel egestas. Phasellus quis dignissim lectus. In porta urna at felis malesuada varius. Aenean blandit ipsum et felis viverra eleifend. Ut tempus tempor mi, ac sagittis urna elementum vel. Maecenas non nisi justo. Nunc sit amet orci et ante faucibus accumsan. Ut vestibulum at eros eu iaculis. Aenean ac orci vitae tortor sagittis pharetra. Suspendisse sodales pretium mauris.")

  return (
    <div id="savedPaged">
      <div className="container-fluid text-left" style={{ backgroundColor: "lightGray", padding: "1.5rem 1rem", width: "93vw", border: "solid black 1px" }}>
        <h4>Saved Books</h4>
        {/* BookCards go here */}
        <BookCard bookTitle={bookTitle} bookAuthor={bookAuthor} bookImage={bookImage} bookDescription={bookDescription} databaseButton={databaseButton} />
      </div>

    </div>
  )
}

export default SavedPage;
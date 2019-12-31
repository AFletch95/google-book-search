import React, { useState } from "react";
import BookSearchBox from "../../components/BookSearchBox";
import BookCard from "../../components/BookCard";
import database from "../../utils/API";

const SearchPage = (props) => {

  const handleBookCardClick = () => {    
    console.log("save button")
    // Create data for book model in database
    // TODO: get data from clicked card and pass into the database
    let bookData = {
      title: bookTitle,
      authors: bookAuthor,
      description: bookDescription,
      image: bookImage,
      link: bookLink
    }
    console.log("NEW BOOK DATA",bookData)
    insertBook(bookData);
  }

  // insert book into database
  const insertBook = (newBook) => {
    database.insertBook(newBook)
    .then(result => console.log(result))
    .catch(err => console.error("INSERT BOOK ERROR", err))
  }

  const [databaseButton] = useState("Save")
  const [databaseButtonColor] = useState("btn btn-success")

  // needed data to fill book cards
  const [apiData, setApiData] = useState([]);

  const [bookTitle] = useState("Unknown Title");
  const [bookAuthor] = useState("Unknown Author");
  const [bookLink] = useState("https://play.google.com/store/books/")
  const [bookImage] = useState("./book-image-placeholder.svg");
  const [bookDescription] = useState("No description avaliable.")



  return (
    <div id="searchPage">
      <BookSearchBox setApiData={setApiData} apiData={apiData} />
      <div className="container-fluid text-left" style={{ backgroundColor: "lightGray", padding: "1.5rem 1rem", width: "93vw", border: "solid black 1px" }}>
        <h4>Results</h4>
        {/* BookCards go here */}
        {apiData.map(data => (
          <BookCard
            key={data.id}
            bookTitle={data.title || bookTitle}
            bookAuthor={data.authors || bookAuthor}
            bookImage={data.img || bookImage}
            bookDescription={data.desc || bookDescription}
            bookLink={data.link || bookLink}
            databaseButton={databaseButton}
            databaseButtonColor={databaseButtonColor}
            handleBookCardClick={handleBookCardClick}
          />
        ))}
      </div>
    </div>

  )
}

export default SearchPage;
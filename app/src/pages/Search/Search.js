import React, { useState } from "react";
import BookSearchBox from "../../components/BookSearchBox";
import BookCard from "../../components/BookCard";

const SearchPage = () => {

  const [databaseButton] = useState("Save")
  const [databaseButtonColor] = useState("btn btn-success")
  const [apiData, setApiData] = useState([]);

  const [bookTitle] = useState("Unknown Title");
  const [bookAuthor] = useState("Unknown Author");
  const [bookLink] = useState("google.com/books")
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
            bookTitle={data.title || bookTitle}
            bookAuthor={data.authors || bookAuthor}
            bookImage={data.img || bookImage}
            bookDescription={data.desc || bookDescription}
            bookLink={data.link || bookLink}
            databaseButton={databaseButton}
            databaseButtonColor={databaseButtonColor}
          />
        ))}
      </div>
    </div>

  )
}

export default SearchPage;
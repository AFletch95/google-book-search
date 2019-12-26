import React, { useState } from "react";
import API from "../../utils/API";

const BookSearchBox = (props) => {

  const [userSearch, setUserSearch] = useState("");
  // const [apiData, setApiData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
    API.getBookSearch(userSearch).then(res => {

      let tempArr = []
      if (res) {
        for (let i = 0; i < 6; i++) {
          tempArr[i] = {
            title: res.data.items[i].volumeInfo.title,
            authors: res.data.items[i].volumeInfo.authors,
            img: res.data.items[i].volumeInfo.imageLinks.thumbnail,
            desc: res.data.items[i].volumeInfo.description,
            link: res.data.items[i].volumeInfo.infoLink,

          }

        } //end for loop
        props.setApiData(tempArr);

      } //end if

    })  //end .then
  }

  return (


    <div className="container-fluid mb-4" style={{ backgroundColor: "lightGray", width: "70vw", padding: "1rem 0.5rem", border: "solid black 1px" }}>
      <h4>Book Search</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-content text-left">

          <label htmlFor="bookSearchBar" className="pl-1">Book Keyword:</label>
          <input id="bookSearchBar" className="form-control" value={userSearch} onChange={(event) => setUserSearch(event.target.value)} placeholder="Harry Potter"></input>
          <small className="form-text text-muted pl-1">You can search for book title, author, publisher, or ISBN number</small>
        </div>
        <div className="d-flex justify-content-end">
          <input className="btn btn-primary" type="submit" value="Search" />
        </div>
      </form>
    </div>

  )

}

export default BookSearchBox;
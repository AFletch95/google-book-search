import React from "react";

const BookSearchBox = () => {
  return (

    <div className="container-fluid mb-4" style={{ backgroundColor: "lightGray", width: "70vw", padding: "1rem 0.5rem", border: "solid black 1px" }}>
      <h4>Book Search</h4>
      <form>
        <div className="form-content text-left">

          <label htmlFor="bookSearchBar" className="pl-1">Book Keyword:</label>
          <input id="bookSearchBar" className="form-control" placeholder="Harry Potter"></input>
          <small className="form-text text-muted pl-1">You can search for book title, author, publisher, or ISBN number</small>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">Search</button>
        </div>
      </form>
    </div>

  )

}

export default BookSearchBox;
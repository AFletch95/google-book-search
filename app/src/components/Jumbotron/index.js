import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron mx-auto" style={{ textAlign: "center", width: "90%", border: "solid 1px black" }}>
      <h1>Google Book Search</h1>
      <h5 className="text-muted">A react app by Austin Fletcher</h5>
      <a className="text-muted" href="https://github.com/AFletch95/google-book-search" rel="noopener noreferrer" target="_blank">view code on Github</a>
      <hr className="mt-0" />

      <ul className="nav nav-tabs justify-content-center ">
        <li className="nav-item">
          <a className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
            href="#Search"
            onClick={() => props.setCurrentPage("Search")}
          >Search</a>
        </li>
        <li className="nav-item">
          <a className={props.currentPage === "Saved" ? "nav-link active" : "nav-link"}
            href="#SavedBooks"
            onClick={() => props.setCurrentPage("Saved")}

          >Saved Books</a>
        </li>
      </ul>




    </div>

  );
};

export default Jumbotron;
import React from "react";

const BookCard = (props) => {

  return (
    <div className="container-fluid" style={{ padding: "1rem", border: "solid black 1px" }}>
      <div className="row ">
        <div className="col-6" style={{ margin: "0" }}>

          <h5>{props.bookTitle}</h5>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <button className="btn btn-primary mr-1">View</button>
          <button className={props.databaseButtonColor}>{props.databaseButton}</button>
        </div>
      </div>
      <p>Writen By {props.bookAuthor}</p>
      <div className="row">
        <div className="col-2">
          <img src={props.bookImage} alt={props.bookTitle} className="img-thumbnail" ></img>
        </div>
        <div className="col-10">
          <p>{props.bookDescription}</p>
        </div>
      </div>
    </div>

  )
}

export default BookCard;
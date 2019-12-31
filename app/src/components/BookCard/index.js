import React from "react";

const BookCard = (props) => {

  return (
    <div className="container-fluid mt-2 mb-2" style={{ padding: "1rem", border: "solid black 2px" }}>
      <div className="row ">
        <div className="col-6" style={{ margin: "0" }}>

          <h5>{props.bookTitle}</h5>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <a className="btn btn-primary mr-1" href={props.bookLink} target="_blank" rel="noopener noreferrer" >View</a>
          <div className={props.databaseButtonColor} onClick={() => 
            props.handleBookCardClick(props._id? props._id :
              props.bookTitle,
              props.bookAuthor,
              props.bookDescription,
              props.bookImage,
              props.bookLink,
              )}
          >{props.databaseButton}</div>
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
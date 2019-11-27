import React from "react";

function Jumbotron () {
  return (
    <div className="jumbotron mx-auto"style={{textAlign: "center", width: "90%", border: "solid 1px black" }}>
        <h1>Google Book Search</h1>
        <h5 className="text-muted">A react app by Austin Fletcher</h5>
        <hr />
      
        <ul className="nav nav-pills justify-content-center ">
          <li className="nav-item">
            <a className="nav-link active" href="/">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Save</a>
          </li>
        </ul>

      

    </div>
    
  );
};

export default Jumbotron;
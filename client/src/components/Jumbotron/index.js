import React from "react";
import './style.css';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center"}}
      className="jumbotron jumbotron-fluid"
    >
      <h2>
        It's nice to meet you!
      </h2>
      <h1>
        WELCOME TO SHELTER FINDER
      </h1>
     {children}
    </div>
  );
}

export default Jumbotron;

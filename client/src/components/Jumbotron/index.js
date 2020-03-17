import React from "react";
import './style.css';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center"}}
      className="jumbotron jumbotron-fluid"
    >
     {children}
    </div>
  );
}

export default Jumbotron;

import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Button(props) {
  return (
    <button className="btn" {...props} tabIndex="0">
      CREATE USER ACCOUNT
    </button>
  );
}

export default Button;

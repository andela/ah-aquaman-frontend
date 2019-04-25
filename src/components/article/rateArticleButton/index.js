import React from "react";
import jwt from "jsonwebtoken";

const RateButton = (props) => {
  const decoded = jwt.decode(localStorage.getItem("token"));
  if (decoded) {
    const loggedUser = decoded.username;
    const hideButton = loggedUser === props.username;

    return (
      <button 
        className="btn btn-primary"
        hidden={hideButton}
        data-toggle="modal"
        data-target="#rating-model"
      >
        <i className="fa fa-star" /> 
        {" "}
        Rate Article
      </button>
    );
  }
  return null;
};

export default RateButton;
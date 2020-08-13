import React from "react";

const Spinner = ({ text }) => {
  return (
    <div className="spinnerContainer">
      <div className="spinnerLine"></div>
      <div className="spinnerLine"></div>
      <div className="spinnerLine"></div>
      <div className="spinnerLine"></div>
      <div className="spinnerLine"></div>
      <div className="spinnerLine"></div>
      {text ? <p>{text}</p> : null}
    </div>
  );
};

export default Spinner;

import React from "react";
import "./BtnPrimary.css";

const BtnPrimary = (props) => {
  const { onClick, isDisabled, title } = props;
  

  return (
    <button id="btn-primary" onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default BtnPrimary;

import React from "react";
import "./PrimaryButton.css";

const BtnPrimary = (props) => {
  const { onClick, isDisabled, title } = props;
  

  return (
    <button className="primary-button-container" onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default BtnPrimary;

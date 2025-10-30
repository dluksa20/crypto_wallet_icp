import React from "react";
import "./PrimaryInput.css";

const PrimaryInput = (props) => {
  const { setInputValue, inputValue, title, placeholder } = props;
  return (
    <fieldset className="primary-input-container">
      <legend className="primary-input-title">{title}</legend>
      <input
        className="primary-input-field"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </fieldset>
  );
};

export default PrimaryInput;

import React from "react";
import "./InputPrimary.css";

const InputPrimary = (props) => {
  const { setInputValue, inputValue, title, placeholder } = props;
  return (
    <fieldset>
      <legend>{title}</legend>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </fieldset>
  );
};

export default InputPrimary;

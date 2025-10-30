import React from "react";

const InfoText = (props) => {
  const {text, isHidden} = props;

  return (
    <p hidden={isHidden}>
      {text}
    </p>
  );
};

export default InfoText;

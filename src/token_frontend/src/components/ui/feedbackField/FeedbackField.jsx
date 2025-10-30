import React from "react";
import './FeedbackField.css'

const FeedbackField = (props) => {
  const { feedback } = props;
  if (!feedback) {
    return null;
  }
  const feedbackClass = feedback.type === "error" ? "error" : feedback.type;

  return <p className={`feedback ${feedbackClass}`}>{feedback.message}</p>;
};

export default FeedbackField;

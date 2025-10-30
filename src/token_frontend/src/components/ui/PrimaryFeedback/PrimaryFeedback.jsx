import React from "react";
import './PrimaryFeedback.css'

const FeedbackField = (props) => {
  const { feedback } = props;
  if (!feedback) {
    return null;
  }
  const feedbackClass = feedback.type === "error" ? "error" : feedback.type;

  return <p className={`primary-feedback ${feedbackClass}`}>{feedback.message}</p>;
};

export default FeedbackField;
 
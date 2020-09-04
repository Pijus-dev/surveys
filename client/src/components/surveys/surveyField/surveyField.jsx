import React from "react";

const SurveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "3px" }} />
      <div
        className="red-text"
        style={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;

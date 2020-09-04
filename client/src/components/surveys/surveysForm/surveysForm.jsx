import React from "react";
import { reduxForm, Field } from "redux-form";
import validateEmails from "../../../utils/validateEmails";
import { FIELDS } from "../../../inputData";

import { Link } from "react-router-dom";

import SurveyField from "../surveyField/surveyField";

import "./surveyForm.scss";

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  const renderFields = () => {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          component={SurveyField}
          label={label}
          name={name}
        />
      );
    });
  };

  return (
    <div className="container wrapper">
      <div className="form-container z-depth-5">
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {renderFields()}
          <Link to="/surveys" className="red darken-2 btn-flat white-text">
            Cancel
            <i className="material-icons right">close</i>
          </Link>
          <button className="btn-flat teal right white-text" type="submit">
            Continue
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);

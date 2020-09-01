import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../../redux/auth/auth.actions";

import { FIELDS } from "../../../inputData";

const SurveyReviewForm = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = FIELDS.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h4>Please confirm your entries</h4>
      {reviewFields}
      <button className="btn yellow white-text darken-3" onClick={onCancel}>
        Go back
      </button>
      <button
        className="green btn darken-1 right white-text"
        onClick={() => submitSurvey(formValues,  history)}
      >
        Submit
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyReviewForm));

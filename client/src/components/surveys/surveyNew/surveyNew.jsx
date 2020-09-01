import React, { useState } from "react";

import { reduxForm } from "redux-form";

import SurveyForm from "../surveysForm/surveysForm.jsx";
import SurveyReviewForm from "../surveyFormReview/surveyReviewForm";

const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div>
      {showReview ? (
        <SurveyReviewForm onCancel={() => setShowReview(false)} />
      ) : (
        <SurveyForm onSurveySubmit={() => setShowReview(true)} />
      )}
    </div>
  );
};
export default reduxForm({
  form: 'surveyForm',
  
})(SurveyNew);

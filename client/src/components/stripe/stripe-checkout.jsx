import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { connect } from "react-redux";
import * as actions from "../../redux/auth/auth.actions";

const StripeCheckoutButton = ({ handleToken }) => {
  return (
    <StripeCheckout
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      name="Surveyss"
      description="&euro;5 for 5 email credits"
    >
      <button className="btn">Add credits</button>
    </StripeCheckout>
  );
};
export default connect(null, actions)(StripeCheckoutButton);

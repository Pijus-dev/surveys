import React from "react";
import { connect } from "react-redux";

import StripeCheckoutButton from "../stripe/stripe-checkout";

import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="left brand-logo" to={user ? "/surveys" : "/"}>
          Surveeys
        </Link>
        <ul className="right">
          <li>{user ? <StripeCheckoutButton /> : null}</li>
          <li style={{ margin: "0px 10px" }}>
            {user ? `CREDITS:${user.credits}` : null}
          </li>
          <li>
            {!user ? (
              <a href="/auth/google">Login with Google</a>
            ) : (
              <a href="/api/logout">LOGOUT</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(Header);

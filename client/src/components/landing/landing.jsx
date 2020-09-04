import React from "react";

import "./landing.scss";

import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing-page">
    <div className="text">
      <h3>Online Surveys</h3>
      <div className="buttons">
        <Link to="/surveys">
          <button>Get Started</button>
        </Link>
        <button>About Us</button>
      </div>
    </div>
    <div className="landing-photo"></div>
  </div>
);

export default Landing;

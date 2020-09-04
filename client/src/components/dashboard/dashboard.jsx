import React from "react";

import { Link } from "react-router-dom";

import swal from "sweetalert";

import { connect } from "react-redux";

import "./dashboard.scss";

const Dashboard = ({ user }) => {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-photo"></div>
        <div className="title">
          <div className="title-box">
            <div className="info">
              <h3>SURVEYY TIME!!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus delectus accusantium vitae voluptatum quo nobis
                expedita nam sit, id deleniti dolorem ab facere. Molestias
                consectetur eveniet tempore nam dolorem ab.
              </p>
            </div>
            <div className="icons">
              <i class="fab fa-instagram fa-2x"></i>
              <i class="fab fa-facebook-square fa-2x"></i>
              <i class="fab fa-twitter-square fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-action-btn">
        {user ? (
          <Link to="/surveys/new" className="btn-floating btn-large yellow darken-3">
            <i className="material-icons">add</i>
          </Link>
        ) : (
          <Link
            onClick={() => swal("", "You have to login first", "info")}
            className="btn-floating btn-large yellow darken-3"
          >
            <i className="material-icons">add</i>
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(Dashboard);

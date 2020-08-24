import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import * as actions from "../src/redux/auth/auth.actions";
import { connect } from "react-redux";

import Header from "./components/header/header";
import Landing from "./components/landing/landing";

class App extends React.Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, actions)(App);

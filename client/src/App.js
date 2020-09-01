import React from "react";
import { Route, Switch } from "react-router-dom";

import * as actions from "../src/redux/auth/auth.actions";
import { connect } from "react-redux";

import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import Dashboard from "./components/dashboard/dashboard";
import SurveyNew from "./components/surveys/surveyNew/surveyNew";

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
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, actions)(App);

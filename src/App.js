import React, { Fragment } from "react";

import "./static/style/common/shared.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <h1>hello world</h1>
      <Fragment>
        <Switch></Switch>
      </Fragment>
    </Router>
  );
}
export default App;

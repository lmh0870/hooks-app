import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import useContext from "Routes/useContext";
import Hypertranslat from "Routes/Hypertranslat";
import useReducer from "Routes/useReducer";
import Refactoring from "Routes/Refactoring";
import newApi from "Routes/newApi";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/useContext" exact component={useContext} />
      <Route path="/Hypertranslat" exact component={Hypertranslat} />
      <Route path="/useReducer" exact component={useReducer} />
      <Route path="/Refactoring" exact component={Refactoring} />
      <Route path="/newApi" exact component={newApi} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

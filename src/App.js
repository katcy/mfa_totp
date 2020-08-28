import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import SignIn from "./components/SignIn";
import Register from "./components/Register";
import RegisterMFA from "./components/RegisterMFA";
import Verify from "./components/Verify";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Route
          path="/"
          exact
          render={() => {
            return <Redirect to="/signin" />;
          }}
        />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/registermfa" component={RegisterMFA} />
        <Route path="/verify" component={Verify} />
        <Route
          path="/Dashboard"
          render={(props) => {
            if (localStorage.getItem("token")) {
              return <Dashboard {...props} />;
            } else {
              return <Redirect to="/signin" />;
            }
          }}
        />
        <Redirect to="/signin" />
      </Router>
    </div>
  );
}

export default App;

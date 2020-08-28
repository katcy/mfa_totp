import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState();
  const [pwd, setpwd] = useState();

  const [error, seterror] = useState();

  const history = useHistory();

  const handleSignIn = () => {
    console.log("clicked");
    localStorage.setItem("user", username);
    fetch("https://fast-bastion-90327.herokuapp.com/signin", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/jon",
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        pwd: pwd,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.message === "TOTP pending") {
          history.push("/registermfa", { access: resp.access });
        } else {
          history.push("/verify");
        }
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  };

  return (
    <div className="m-auto w-50">
      <div className="card mt-4">
        <div className="card-header">SignIn</div>
        <div className="card-body">
          {error && <div className="alert alert-danger">Invalid Login</div>}
          <div className="card-text">
            <div className="form-group">
              <label>UserName:</label>
              <input
                type="text"
                className="w-50 form-control"
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="w-50 form-control"
                onChange={(evt) => {
                  setpwd(evt.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <button
              className="btn btn-dark"
              onClick={(evt) => {
                handleSignIn();
              }}
            >
              SignIn
            </button>
            <br />
            <button
              className="btn btn-link"
              onClick={(evt) => {
                history.push("/register");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState();
  const [pwd, setpwd] = useState();

  const history = useHistory();

  const handleSignIn = async () => {
    console.log("clicked");
    try {
      const resp = await fetch("http://localhost:5000/register", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/jon",
        },
        method: "POST",
        body: JSON.stringify({
          username: username,
          pwd: pwd,
        }),
      });
      localStorage.setItem("user", username);
      const jsonResp = await resp.json();
      history.push("/registermfa", { access: jsonResp.accessKey });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="m-auto w-50">
      <div className="card mt-4">
        <div className="card-header">Register</div>
        <div className="card-body">
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
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

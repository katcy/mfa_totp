import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Verify = () => {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const verifyPasscode = () => {
    fetch("http://localhost:5000/verify", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/jon",
      },
      method: "POST",
      body: JSON.stringify({
        username: localStorage.getItem("user"),
        code: state.trim(),
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp._id);
        history.push("/dashboard", { id: resp._id });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <div className="mt-4 m-auto w-50">
      <div className="card">
        <div className="card-header">Verify</div>
        {error && <div className="alert alert-danger">Invalid Token</div>}
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <input
              onChange={(evt) => {
                setState(evt.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-dark"
            onClick={(evt) => {
              verifyPasscode();
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;

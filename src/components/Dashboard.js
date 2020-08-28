import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
const Dashboard = (props) => {
  const [Id, setId] = useState();
  const history = useHistory();
  useEffect(() => {
    console.log(props);
    setId(props.location.state.id);
  }, []);
  return (
    <div className="col-sm-6">
      <div className="m-auto w-75">
        <div className="card">
          <div className="card-header">User Id: {Id}</div>
          <div className="card-body">Yay... Successfully Authenticated</div>
          <button
            className="btn btn-dark"
            onClick={(evt) => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              history.push("/signin");
            }}
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

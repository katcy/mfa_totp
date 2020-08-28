import React from "react";

import QRGenerator from "qrcode.react";

import { useHistory } from "react-router-dom";

const RegisterMFA = (props) => {
  const history = useHistory();
  return (
    <div className="mt-4 m-auto w-50">
      <div className="card">
        <div className="card-header">Register MFA</div>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <QRGenerator value={props.location.state.access} />
          </div>
          <div className="card-text mt-2">
            Scan the QR code with your favourite authenticator like Duo Mobile
            or Google Authenticator to enable MFA. <br />
            Click on Continue once done.
          </div>
          <button
            className="btn btn-dark"
            onClick={(evt) => {
              history.push("/verify");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterMFA;

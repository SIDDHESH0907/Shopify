import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div className="error">
        <div className="error-top">
          <p className="error-status">{error.status}</p>
          {/* <p className="error-status-text">{error.statusText}</p> */}
        </div>

        <div className="error-mid">
          <p className="error-text-1">Oh No!</p>
          <p className="error-text-1">This page is not available</p>
        </div>

        <div className="error-bottom">
          <p className="error-text-2">Maybe Bigfoot has broken this page.</p>
          <p className="error-text-2">Come back to the homepage</p>
        </div>

        <div className="to-home">
          <Link to="/" className="to-home-text">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;

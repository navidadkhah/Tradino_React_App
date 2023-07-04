// This is 404 page, we use this page when the url not match to any routes we have
import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404Page() {
  return (
    <div className="error404-content">
      <h1 className="error404-title">404</h1>
      <h3 className="error404-oops-txt">Ooops! Page not Found</h3>
      <h4 className="error404-sorry-txt">
        Sorry, the page you are looking for doesn't exists. if you think some
        thing is broken report a problem.
      </h4>
      <div className="error404-btn">
        <button className="error404-return-btn">RETURN HOME</button>
        <button className="error404-report-btn">REPORT PROBLEM</button>
      </div>
    </div>
  );
}
//<link to={applicant.homePage} className="error404-return-btn">RETURN HOME</Link>

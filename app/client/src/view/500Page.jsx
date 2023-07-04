// This is 500 page, we use this page when server error
import React from 'react';

export default function Error500Page() {
  return (
    <div className="error500-content">
      <h1 className="error500-title">500</h1>
      <h3 className="error500-oops-txt">Ooops! Something went wrong</h3>
      <h4 className="error500-sorry-txt">
        The server encountered an internal error or misconfiguration and was
        unable to complete your request
      </h4>

      <button className="error500-return-btn">RETURN HOME</button>
    </div>
  );
}

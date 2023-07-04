import React from "react";
import './snackbar.css'
export function SnackBar({handleToClose}) {
  return (
    <div className="snackbar__container">
      <div className="snackbar__label">email sent</div>
      <div className="snackbar__dismiss" onClick={handleToClose}>
        &times;
      </div>
    </div>
  );
}
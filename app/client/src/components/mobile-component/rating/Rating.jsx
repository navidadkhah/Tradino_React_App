//in this component we implement the rariong part of the auto analyze page
import React, { useState } from "react";
import './rating.css';

export function Rating({ goodRate }) {
  const getGreenWidth = () => {
    return ({
      width: `${goodRate}%`
    });
  }
  const getRedWidth = () => {
    return ({
      width: `${100 - goodRate}%`
    });
  }
  return (
    <div>
      <div className="mb-rating-first-row">
        <div
          style={getGreenWidth()}
          className="mb-rating-goodRate"></div>
        <div
          style={getRedWidth()}
          className="mb-rating-badRate"></div>
      </div>
      <div className="mb-rating-label">
        <span className="mb-rating-good-label">%{goodRate} Good</span>
        <span>%{100-goodRate} Bad</span>
      </div>
    </div>
  )
}
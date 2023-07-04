//in this component we implement the rariong part of the auto analyze page
import React, { useState } from 'react';
import './rating.css';

export function Rating({ goodRate }) {
  const getGreenWidth = () => {
    return {
      width: `${goodRate}%`,
    };
  };
  const getRedWidth = () => {
    return {
      width: `${100 - goodRate}%`,
    };
  };
  return (
    <div className="rate-width">
      <div className="rating-first-row">
        <div style={getGreenWidth()} className="rating-goodRate" />
        <div style={getRedWidth()} className="rating-badRate" />
      </div>
      <div className="rating-label">
        <span className="rating-good-label">%{goodRate} Good</span>
        <span>%{100 - goodRate} Bad</span>
      </div>
    </div>
  );
}

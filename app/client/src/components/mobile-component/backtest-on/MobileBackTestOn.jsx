import React, { useState } from 'react';
//icon
import more from '../../../assets/icon/more.svg';
import less from '../../../assets/icon/less.svg';
//component
import { MobileButton } from '../button/MobileButton';
//styles
import './mobileBacktestOn.css';

export function MobileBackTestOn({
  handleClick,
  moreBackTest,
  bigImg,
  smallImg,
  hasIcon,
}) {
  if (hasIcon) {
    return (
      <div className="mb-buyStrategy-backtest">
        <div className="mb-buyStrategy-first-row">
          <div className="row">
            <div className="mb-buyStrategy-first-row-img">
              <img className="mb-buyStrategy-img-big" src={bigImg} />
              <img className="mb-buyStrategy-img-small" src={smallImg} />
            </div>
            <span className="big">USDJPY </span>
            <span className="small"> in 1 hour time frame</span>
          </div>
          {!moreBackTest ? (
            <img
              className="mb-more-icon-buyStrategy"
              aria-label="more"
              id="moreBacktest"
              onClick={handleClick}
              src={more}
            />
          ) : (
            <img
              className="mb-more-icon-buyStrategy"
              aria-label="less"
              id="lessBacktest"
              onClick={handleClick}
              src={less}
            />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-buyStrategy-backtest">
        <div className="mb-buyStrategy-first-row">
          <div className="row">
            <div className="mb-buyStrategy-first-row-img">
              <img className="mb-buyStrategy-img-big" src={bigImg} />
              <img className="mb-buyStrategy-img-small" src={smallImg} />
            </div>
            <span className="big">USDJPY </span>
            <span className="small"> in 1 hour time frame</span>
          </div>
        </div>
      </div>
    );
  }
}

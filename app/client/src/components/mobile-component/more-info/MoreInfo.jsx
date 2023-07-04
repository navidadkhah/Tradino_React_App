//this component renders when moer icon pressed 
import React, { useState } from "react";
//styles
import './moreInfo.css';
//icon
import plus from '../../../assets/icon/plus.svg';

export function MoreInfo({addComponent}) {
  return (
    <div className="mb-moreInfo-content">
      <div className="mb-moreInfo-first-row">
        <div className="mb-moreInfo-first-row-timeframe">
          <label htmlFor="time-frame">time frame  </label>
          <select id="time-frame">
            <option value={'24H'}>24H</option>
            <option >12H</option>
            <option >9H</option>
            <option >6H</option>
            <option >3H</option>
          </select>
        </div>
        <div className="mb-moreInfo-first-row-number">
          <label htmlFor="number">number</label>
          <input id='number' type={'number'} min='0' max='10' step='1' />
        </div>
      </div>
      <div className="mb-moreInfo-second-row">
        <label htmlFor="source">source  </label>
        <select id="source">
          <option value={'high and low'}>High and Low</option>
        </select>
      </div>
      <div className="mb-moreInfo-checkbox">
        <input type={'checkbox'} className='mb-moreInfo-second-row' />
        <span>show important level</span>
      </div>
      <div className="mb-moreInfo-checkbox">
        <input type={'checkbox'} className='mb-moreInfo-second-row' />
        <span>show tedad backhord</span>
      </div>
      <div className="mb-moreInfo-btn wrapper">
        <img className='mb-add-icon-moreInfo'
          aria-label="info"
          src={plus} />
        <button id={'addAnotherButton'} onClick={addComponent}>add another</button>
      </div>
    </div>
  );
}
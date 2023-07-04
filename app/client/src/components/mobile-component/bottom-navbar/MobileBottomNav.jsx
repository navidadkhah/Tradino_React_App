//the bottom navbar compnented and used in both search and home page
import React, { useState } from "react";
import strategy from '../../../assets/icon/strategy.svg';
import star from '../../../assets/icon/star.svg';
import filter from '../../../assets/icon/filter.svg';
import home from '../../../assets/icon/home.svg';
import signal from '../../../assets/icon/signal.svg';
import './mobileBottomNav.css';

export function MobileBottomNav({ handleClick, navChoose }) {
  return (
    <div>
      <nav>
        <div className='mb-homePge-btm-nav'>
          <div className='mb-homePge-btm-nav-item' onClick={handleClick} id={'watchlist'}>
            <img className={navChoose.watchlist == true ? 'mb-icon-homePge-nav chosen-nav' : 'mb-icon-homePge-nav'}
              aria-label="img" 
              src={star} />
            <p>watchlist</p>
          </div>
          <div className='mb-homePge-btm-nav-item' onClick={handleClick} id={'filter'}>
            <img className={navChoose.filter == true ? 'mb-icon-homePge-nav chosen-nav' : 'mb-icon-homePge-nav'}
              aria-label="img"
              src={filter} />
            <p>filter</p>
          </div>
          <div className='mb-homePge-btm-nav-item ' onClick={handleClick} id={'home'}>
            <img className={navChoose.home == true ? 'mb-icon-homePge-nav chosen-nav' : 'mb-icon-homePge-nav'}
              aria-label="img"
              src={home} />
            <p>home</p>
          </div>
          <div className='mb-homePge-btm-nav-item' onClick={handleClick} id={'strategy'}>
            < img className={navChoose.strategy == true ? 'mb-icon-homePge-nav chosen-nav' : 'mb-icon-homePge-nav'}
              aria-label="img"
              src={strategy} />
            <p>stratrgy</p>
          </div>
          <div className='mb-homePge-btm-nav-item' onClick={handleClick} id={'signal'}>
            <img className={navChoose.signal == true ? 'mb-icon-homePge-nav chosen-nav' : 'mb-icon-homePge-nav'}
              src={signal} />
            <p>signal</p>
          </div>

        </div>
      </nav>
    </div>
  );
}
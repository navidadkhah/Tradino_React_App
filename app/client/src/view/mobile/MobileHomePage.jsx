//in this component we implement mobile home page which has both bottom and currency navbar 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//icons
import search from '../../assets/icon/search.svg';
import profile from '../../assets/icon/profile.svg';

//components
import { MobileBottomNav } from '../../components/mobile-component/bottom-navbar/MobileBottomNav';
import { CurrencyNav } from '../../components/mobile-component/currency-navbar/CurrencyNav';
//address
import applicant from '../../Applicant.json';
import { SideNav } from '../../components/mobile-component/side-navbar/SideNav';

export default function MobileHomePage() {
  const [currencyChoose, setCurrencyChoose] = useState({
    forex: true,
    stock: false,
    crypto: false,
  });
  const [navChoose, setNavChoose] = useState({
    watchlist: false,
    filter: false,
    home: true,
    strategy: false,
    signal: false,
  });
  const [profileChosen, setProfileChosen] = useState(false);
  const profileOnClose = () => {
    setProfileChosen(false);
  }
  const handleClick = e => {
    let id = e.currentTarget.id;
    if (id == 'forex' || id == 'stock' || id == 'crypto') {
      setCurrencyChoose({
        forex: false,
        stock: false,
        crypto: false,
      });
      setCurrencyChoose(prev => {
        return {
          ...prev,
          [id]: true,
        };
      });
    } else if (id == 'profile') {
      setProfileChosen(true);
    }
    else {
      setNavChoose({
        watchlist: false,
        filter: false,
        home: false,
        strategy: false,
        signal: false,
      });
      setNavChoose(prev => {
        return {
          ...prev,
          [id]: true
        }
      })
    }
  }
  return (
    <div className='tradino'>
      <div className='mb-homePage-content'>
        <div className='mb-home-first-row'>
          <Link to={applicant.mobileSearchPage}><img className='mb-icon-homePge'
            aria-label="search"
            src={search} />
          </Link>
          <h1 className='small-home-header'>Tradino</h1>
          <img className='mb-icon-homePge'
            aria-label="img"
            src={profile}
            id='profile'
            onClick={handleClick} />
          {profileChosen && <SideNav profileOnClose={profileOnClose} />
          }
        </div>
        <Link to={applicant.mobileAutoPageAnalyzer}><button className="mb-auto-analyze-btn">
          <p>Auto Analyze with A.I.</p>
        </button></Link>
        <div className='mb-gray-homePge-content'>
          <CurrencyNav handleClick={handleClick} currencyChoose={currencyChoose} />
          <div className='mb-hmPge-white-content'>
            <p> best strategy</p>
            <button className="mb-hmPge-more-btn">more</button>
          </div>
          <div className="mb-hmPge-white-content">
            <p> best strategy</p>
            <button className="mb-hmPge-more-btn">more</button>
          </div>
          <div className="mb-hmPge-white-content">
            <p> best strategy</p>
            <button className="mb-hmPge-more-btn">more</button>
          </div>
        </div>
        <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
      </div>
    </div>
  );
}
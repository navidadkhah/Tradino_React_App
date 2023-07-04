//in this component we implement the mobile search page with bottom navbar and currency navbar 
import React, { useState } from 'react';
import back from '../../assets/icon/back.svg';
import searchInput from '../../assets/icon/searchInput.svg';
import applicant from '../../Applicant.json';
import { Link } from 'react-router-dom';
import { MobileBottomNav } from '../../components/mobile-component/bottom-navbar/MobileBottomNav';
import { CurrencyNav } from '../../components/mobile-component/currency-navbar/CurrencyNav';

export default function MobileSearchPage() {
  const [currencyChoose, setCurrencyChoose] = useState({
    forex: true,
    stock: false,
    crypto: false
  });

  const [navChoose, setNavChoose] = useState({
    watchlist: false,
    filter: false,
    home: true,
    strategy: false,
    signal: false
  });


  const handleClick = (e) => {
    let id = e.currentTarget.id;
    if (id == 'forex' || id == 'stock' || id == 'crypto') {
      setCurrencyChoose({
        forex: false,
        stock: false,
        crypto: false
      });
      setCurrencyChoose(prev => {
        return {
          ...prev,
          [id]: true
        }
      });
    } else {
      setNavChoose({
        watchlist: false,
        filter: false,
        home: false,
        strategy: false,
        signal: false
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
      <div className='mb-searchPage-content'>
        <div className='mb-search-first-row'>
          <Link to={applicant.mobileHomePage}>
            <img className='mb-icon-searchPge'
              aria-label="img"
              src={back} />
          </Link>
          <h1 className='small-search-header'>Tradino</h1>
        </div>
        <div className='mb-gray-searchPge-content'>
          <CurrencyNav handleClick={handleClick} currencyChoose={currencyChoose} />
          <div class="wrapper">
            <img className='mb-icon-searchPge-input'
              aria-label="img"
              src={searchInput} />
            <input class="mb-search-input "/>
          </div>
        </div>
        <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
      </div >
    </div >
  );
}
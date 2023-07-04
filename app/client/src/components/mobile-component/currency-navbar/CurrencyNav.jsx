import React from "react";
import './currencyNav.css';

export function CurrencyNav({ handleClick, currencyChoose }) {

  return (
    <div>
      <nav className='mb-hmPge-currency-bar'>
        <div className={currencyChoose.forex == true ? 'mb-hmPge-curreny-name chosen-currency' : 'mb-hmPge-curreny-name '}
          onClick={handleClick} id={'forex'} ><span>forex</span></div>
        <div className={currencyChoose.stock == true ? 'mb-hmPge-curreny-name chosen-currency' : 'mb-hmPge-curreny-name '}
          onClick={handleClick} id={'stock'} ><span>stock</span></div>
        <div className={currencyChoose.crypto == true ? 'mb-hmPge-curreny-name chosen-currency' : 'mb-hmPge-curreny-name'}
          onClick={handleClick} id={'crypto'} ><span>crypto</span></div>
      </nav >
    </div>
  );
}
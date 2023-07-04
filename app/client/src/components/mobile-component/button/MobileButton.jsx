//it create two styled button 
//by passing className={'green-btn'} and  className={'white-btn'} you determine which one it will be . 
import './mobileButton.css';
import React from 'react';

export function MobileButton({ handleChange, disabler, name, className, icon, id }) {
  if (icon == true) {
    return (
      <div className='mb-btn-container'>
        <button onClick={handleChange} className={className} disabled={disabler} id={id}>
          <object className='icon-btn'
            aria-label="img"
            data={require('../../../assets/icon/google.svg')} />
          {name}
        </button>
      </div>
    );
  } else {
    return (
      <div className='mb-btn-container'>
        <button onClick={handleChange} className={className} disabled={disabler} id={id}>
          {name}
        </button>
      </div>
    );
  }
}
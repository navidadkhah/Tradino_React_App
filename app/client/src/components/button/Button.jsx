//it create two styled button
//by passing className={'green-btn'} and  className={'white-btn'} you determine which one it will be .
import React from 'react';
import './button.css';

export function Button({ handleChange, disabler, name, className, icon }) {
  if ( icon  == true) {
      return (
        <div className='web-btn-container'>
          <button onClick={handleChange} className={className} disabled={disabler}>
            <object className='icon-btn'
              aria-label="img"
              data={require('../../assets/icon/google.svg')} />
            {name}
          </button>
        </div>
      );
    }else{
      return(
      <div className='web-btn-container'>
          <button onClick={handleChange} className={className} disabled={disabler} > 
            {name}
          </button>
        </div>
    );}
}

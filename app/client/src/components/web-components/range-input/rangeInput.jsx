//in this component we create a range input and save the value
import React, { useState } from 'react';

//icon
import more from '../../../assets/icon/more.svg';
import checkmark from '../../../assets/icon/checkmark.svg';
import star from '../../../assets/icon/light-star.svg';
import info from '../../../assets/icon/info.svg';

//style
import './rangeInput.css';

export function RangeInput({ handleChange, label, name, data, setData, max }) {
  const [isChecked, setIsChecked] = useState(false);

  //calculate the filled area
  const getBackgroundSize = () => {
    //console.log(`${(data * 100) / max}% 100%`);
    let backgroundSize = `${(data.name * 100) / { max }}% 100%`;
    let dataN = { data }.name;
    // console.log(data);
    return { backgroundSize: `${({ data } * 100) / { max }}% 100%` };
  };

  return (
    <div>
      <div className="analyzePge-row">
        <div className="analyzePge-box-row">
          <img className="info-icon-analyzePge" aria-label="info" src={info} />
          <label htmlFor={name}>{label}</label>

          <div className="analyzePge-boxRange">
            <input
              className="analyzePge-rangeinput"
              type="range"
              min="0"
              max={max}
              onChange={handleChange}
              name={name}
              style={getBackgroundSize()}
              value={data}
            />
            <div className="wrapper">
              <input
                type={'checkbox'}
                className="autoPage-checkbox"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
              />
              {isChecked && (
                <img
                  className="check-icon-analyzePge"
                  aria-label="checkmark"
                  src={checkmark}
                />
              )}
            </div>
            <img
              className="more-icon-analyzePge"
              aria-label="more"
              src={more}
            />
          </div>

          <img className="star-icon-analyzePge" aria-label="star" src={star} />
        </div>
      </div>
    </div>
  );
}

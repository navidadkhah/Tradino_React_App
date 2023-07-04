// This component contain the input form for use in every page we want
import React from 'react';

// Style
import './input.css';


//password icons
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export function Input({
  handleChange,
  name,
  placeholder,
  type,
  error,
  className,
  handleClickShowPassword,
  showPassword,
  passIcon
}) {
  if (passIcon) {
    return (
      <div className="form">
        <label htmlFor={name} className="label">
          {name}
        </label>
        <div className='wrapper'>
          <input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
          />
          <span className='login-eye-icon' id={name} onClick={handleClickShowPassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </span></div>
        <span className="input-error">{error}</span>
      </div>
    );
  }else{
    return (
      <div className="form">
        <label htmlFor={name} className="label">
          {name}
        </label>
          <input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
          />
        <span className="input-error">{error}</span>
      </div>
    );
  }
}

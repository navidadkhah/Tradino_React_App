// This page show us the signup, it worked with google and user inputs

import React, { useState } from 'react';
import { MobileButton } from "../../components/mobile-component/button/MobileButton.jsx";
import { Input } from "../../components/input/Input";
import { MobileOrItem } from "../../components/mobile-component/orItem/MobileOrItem";
import { Link } from 'react-router-dom';
import applicant from '../../Applicant.json';

// Error handler
import { Error } from '../ErrorHandling';
//Icons
import checkmark from '../../assets/icon/checkmark.svg';
//constorller
import { AccountController } from '../../../../Controllers/AccountController.js';

export default function MobileSignup() {
  //This hook is used to see whether the privacy checkbo is checked or not 
  const [isChecked, setIsChecked] = useState(false);
  const handlePrivacyCheck = (e) => {
    setIsChecked(!isChecked);
  }

  // This hook, use for inputs class name when the client input the wrong data
  const [className, setClassName] = useState({
    usernameClass: 'input',
    emailClass: 'input',
    passwordClass: 'input',
    confirmPasswordClass: 'input',
    privacyCheckClass: 'privacy-policy'
  });

  // This hook use for save inputs data
  const [inputForm, setInputForm] = useState({});

  // This hook use for check errors of inputs
  const [formErr, setFormErr] = useState({
    user_name_valid_Massage: '',
    email_valid_Massage: '',
    password_valid_Massage: '',
    confirm_password_valid_Massage: '',
  });
  //this hook is being used for showing and hiding
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  //this function is for switching for show or hide password
  const handleClickShowPassword = (e) => {
    let name = e.currentTarget.id;
    if (name == "Password") {
      setShowPassword({
        ...showPassword,
        password: !showPassword.password,
      });
    } else {
      setShowPassword({
        ...showPassword,
        confirm: !showPassword.confirm,
      });
    }
  };
  // This arrow function use for put data in our save data hook
  const handleInput = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  // This arrow function use for check errors in inputs
  const handleSubmit = async event => {
    event.preventDefault();
    const user_name_valid = await Error.UserNameHandling(inputForm['Username']);
    const email_valid = await Error.EmailHandling(inputForm['Email']);
    const password_valid = await Error.PasswordHandling(inputForm['Password']);
    const confirm_password_valid = await Error.ConfirmPasswordHandling(
      inputForm['Password'],
      inputForm['ConfirmPassword'],
    );
    setFormErr({
      ...formErr,
      user_name_valid_Massage: user_name_valid.massage,
      email_valid_Massage: email_valid.massage,
      password_valid_Massage: password_valid.massage,
      confirm_password_valid_Massage: confirm_password_valid.massage,
    });

    const username_box =
      user_name_valid.massage == '' ? 'input' : 'wrong-input';
    const email_box = email_valid.massage == '' ? 'input' : 'wrong-input';
    const password_box = password_valid.massage == '' ? 'input' : 'wrong-input';
    const confirm_password_box =
      confirm_password_valid.massage == '' ? 'input' : 'wrong-input';
    const privacy_policy_box = isChecked ? 'privacy-policy' : 'privacy-err';

    setClassName({
      ...className,
      usernameClass: username_box,
      emailClass: email_box,
      passwordClass: password_box,
      confirmPasswordClass: confirm_password_box,
      privacyCheckClass: privacy_policy_box,
    });
    // If all inputs have no error, send to Signup controller to post data
    if (
      user_name_valid.massage == '' &&
      email_valid.massage == '' &&
      password_valid.massage == '' &&
      confirm_password_valid.massage == ''
    ) {
      const response = await AccountController.Signup(
        inputForm['Username'],
        inputForm['Email'],
        inputForm['Password'],
        inputForm['ConfirmPassword'],
      );
    }
  };

  return (
    <div className='tradino'>
      <h1 className='tradino-title'>Tradino</h1>
      <div className="mb-signup-content">
        <span className="mb-header">Sign Up</span>
        <form onSubmit={handleSubmit} autoComplete="off">

          <div className="mb-signup-inputs">
            <Input
              name="Username"
              placeholder="username"
              type="text"
              handleChange={handleInput}
              className={className.usernameClass}
              error={formErr['user_name_valid_Massage']}
            />
          </div>

          <div className="mb-signup-inputs">
            <Input
              name="Email"
              placeholder="Example@gmail.com"
              type="text"
              handleChange={handleInput}
              className={className.emailClass}
              error={formErr['email_valid_Massage']}
            />
          </div>

          <div className="mb-signup-inputs">
            <Input
              name="Password"
              placeholder="******"
              type={showPassword.password ? "text" : "password"}
              handleChange={handleInput}
              className={className.passwordClass}
              error={formErr['password_valid_Massage']}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword.password}
              passIcon={true}
            />
          </div>
          <Input
            name="ConfirmPassword"
            placeholder="******"
            type={showPassword.confirm ? "text" : "password"}
            handleChange={handleInput}
            className={className.confirmPasswordClass}
            error={formErr['confirm_password_valid_Massage']}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword.confirm}
            passIcon={true}
          />

          <div className="mb-agree wrapper">
            <input type="checkbox" className={className.privacyCheckClass} onClick={handlePrivacyCheck} checked={isChecked} />
            {isChecked && <img className='check-icon-signupPge'
              aria-label="checkmark"
              src={checkmark} />}
            <span>  I agree with prvacy and policy</span>
          </div>
          <div className="mb-signup-button">
            <MobileButton className="mb-green-btn" name="Sign Up" icon={false} />
          </div>
        </form>

        <MobileOrItem />

        <div className="mb-signup-button-google">
          <MobileButton className="mb-white-btn" name="Sign Up with google" icon={true} />
        </div>

        <span className="mb-have-account">
          Already have an account? <Link to={applicant.mobileSignin} className="back"> <span> sign in</span></Link>
        </span>
      </div>
    </div>
  );
}

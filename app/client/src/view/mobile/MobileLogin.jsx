//in login page user enters login and password to enter his account

import React, { useState } from "react";
import { Link } from "react-router-dom";
//component
import { MobileButton } from "../../components/mobile-component/button/MobileButton.jsx";
import { Input } from "../../components/input/Input";
import { MobileOrItem } from "../../components/mobile-component/orItem/MobileOrItem";
//link
import applicant from '../../Applicant.json';
//error handling
import { Error } from '../ErrorHandling';
// Controller for post data
import { AccountController } from '../../../../Controllers/AccountController';


export default function MobileLogin() {
  let button;
  const [data, setData] = useState({
    email: '',
    id: ''
  });

  const [isloading, setIsLoading] = useState(false);
  // This hook, use for inputs class name when the client input the wrong data
  const [className, setClassName] = useState({
    emailClass: 'input',
    passwordClass: 'input',
  });

  // This hook use for save inputs data
  const [inputForm, setInputForm] = useState({});

  // This hook use for check errors of inputs
  const [formErr, setFormErr] = useState({
    email_valid_Massage: '',
    password_valid_Massage: '',
  });
  //this hook is being used for showing and hiding
  const [showPassword, setShowPassword] = useState(false);

  //this function is for switching for show or hide password
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
    const email_valid = await Error.EmailHandling(inputForm['Email']);
    const password_valid = await Error.PasswordHandling(inputForm['Password']);

    setFormErr({
      ...formErr,
      email_valid_Massage: email_valid.massage,
      password_valid_Massage: password_valid.massage,
    });

    const email_box = email_valid.massage == '' ? 'input' : 'wrong-input';
    const password_box = password_valid.massage == '' ? 'input' : 'wrong-input';

    setClassName({
      ...className,
      emailClass: email_box,
      passwordClass: password_box,
    });
    // If all inputs have no error, send to login controller to post data
    if (email_valid.massage == '' && password_valid.massage == '') {
      AccountController.Login(inputForm['Email'], inputForm['Password']);
    }
  };




  if (isloading) {
    button = <MobileButton className={'green-btn'} disabler={isloading} name={'loading'} icon={false} />
  } else {
    button = <MobileButton className={'green-btn'} disabler={isloading} name={'login'} icon={false} />
  }
  //  <p className={formErr.ssn_valid_Validation ? 'disapear' : 'error msg'}>{formErr.ssn_valid_Massage}</p>
  return (
    <div className="tradino">
      <h1 className="tradino-title">Tradino</h1>
      <div className="mb-login-content">
        <h2 className="mb-login-title">login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Input
            name="Email"
            placeholder="Example@gmail.com"
            type="text"
            handleChange={handleInput}
            className={className.emailClass}
            error={formErr['email_valid_Massage']}
          />
          <div className="mb-login-distance">
            <Input
              name="Password"
              placeholder="******"
              type={showPassword ? "text" : "password"}
              handleChange={handleInput}
              className={className.passwordClass}
              error={formErr['password_valid_Massage']}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword}
              passIcon={true}
            /></div>
          <Link to={applicant.mobileforgetPassword}> <p className="mb-forgot-link" >Forgot password?</p></Link>
          {button}
        </form>
        <MobileOrItem />
        <MobileButton className={'white-btn'} disabler={isloading} name={'sign in with google'} icon={true} />
        <div className="signup-link">Dont you have an account?
          <Link to={applicant.mobileSignup} style={{ color: "blue" }}> sign up</Link>
        </div>
      </div>
    </div>
  );
}

//makes a form of id(or username) and email
//checks whether the id exists in api or not
//if not shows the error messeage and color the border of input fields
//it also has a loading option which disables buttons and is shown when fetching data

import React, { useState } from 'react';

// Compenents
import { Link } from 'react-router-dom';
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { OrItem } from '../components/orItem/OrItem';

// Routs in json
import Applicant from '../Applicant.json';

// Error handler
import { Error } from './ErrorHandling';

// Controller for post data
import { Controller } from '../../../Controllers/AccountController';
import { CircularProgress } from '@material-ui/core';

export default function Login() {
  // This hook use for check click button or not
  const [isClick, setIsClick] = useState(false);

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
      setIsClick(true);
      Controller.Login(inputForm['Email'], inputForm['Password']);
    }
  };

  return (
    <div className="login-page">
      <div className="signin-content">
        <h2 className="login-title">log in</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <Input
            name="Email"
            placeholder="Example@gmail.com"
            type="text"
            handleChange={handleInput}
            className={className.emailClass}
            error={formErr['email_valid_Massage']}
            passIcon={false}
          />
          <div className="login-distance">
            <Input
              name="Password"
              placeholder="******"
              type={showPassword ? 'text' : 'password'}
              handleChange={handleInput}
              className={className.passwordClass}
              error={formErr['password_valid_Massage']}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword}
              passIcon={true}
            />
          </div>
          <Link to={Applicant.forgetPassword}>
            <p className="forgot-link"> Forgot password?</p>
          </Link>
          <Button
            className="green-btn"
            name={isClick ? <CircularProgress /> : 'login'}
            icon={false}
          />
        </form>
        <OrItem />
        <Button className="white-btn" name="sign in with google" icon={true} />
        <div className="signup-link">
          Dont you have an account?
          <Link to={Applicant.signup}> sign up</Link>
        </div>
      </div>
    </div>
  );
}

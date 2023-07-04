import React, { useState } from 'react';

// Componets
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { OrItem } from '../components/orItem/OrItem';
import { Link } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';

// Routs in json
import applicant from '../Applicant.json';

// Error handler
import { Error } from './ErrorHandling';

export default function NewPasswordPage() {
  // This hook use for check click button or not
  const [isClick, setIsClick] = useState(false);

  // This hook, use for inputs class name when the client input the wrong data
  const [className, setClassName] = useState({
    passwordClass: 'input',
    confirmPasswordClass: 'input',
  });

  // This hook use for save inputs data
  const [inputForm, setInputForm] = useState({});

  // This hook use for check errors of inputs
  const [formErr, setFormErr] = useState({
    password_valid_Massage: '',
    confirm_password_valid_Massage: '',
  });
  //this hook is being used for showing and hiding
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  //this function is for switching for show or hide password
  const handleClickShowPassword = e => {
    let name = e.currentTarget.id;
    console.log(name);
    if (name == 'Password') {
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
    const password_valid = await Error.PasswordHandling(inputForm['Password']);
    const confirm_password_valid = await Error.ConfirmPasswordHandling(
      inputForm['Password'],
      inputForm['ConfirmPassword'],
    );

    setFormErr({
      ...formErr,
      password_valid_Massage: password_valid.massage,
      confirm_password_valid_Massage: confirm_password_valid.massage,
    });

    const password_box = password_valid.massage == '' ? 'input' : 'wrong-input';
    const confirm_password_box =
      confirm_password_valid.massage == '' ? 'input' : 'wrong-input';

    setClassName({
      ...className,
      passwordClass: password_box,
      confirmPasswordClass: confirm_password_box,
    });
    if (password_valid.massage == '' && confirm_password_valid.massage == '') {
      setIsClick(true);
    }
  };

  return (
    <div className="new-password-page">
      <div className="newPassPge-content">
        <h className="newPassPge-title">Create New Password</h>
        <p className="newPass-instruction">please enter new password</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Input
            name="Password"
            type={showPassword.password ? 'text' : 'password'}
            placeholder="******"
            handleChange={handleInput}
            className={className.passwordClass}
            error={formErr['password_valid_Massage']}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword.password}
            passIcon={true}
          />
          <div className="nwpass-input">
            <Input
              name="ConfirmPassword"
              placeholder="******"
              type={showPassword.confirm ? 'text' : 'password'}
              handleChange={handleInput}
              className={className.confirmPasswordClass}
              error={formErr['confirm_password_valid_Massage']}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword.confirm}
              passIcon={true}
            />
          </div>

          <div className="nwpass-input-button">
            <Button
              className="green-btn"
              name={isClick ? <CircularProgress /> : 'save'}
              icon={false}
            />
          </div>
        </form>

        <div className="nwpass-distance" />
      </div>
    </div>
  );
}

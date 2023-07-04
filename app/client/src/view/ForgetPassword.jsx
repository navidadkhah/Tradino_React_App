//this component asks for user's email to send an email to get a new password

import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import { CircularProgress } from '@material-ui/core';

// Components
import { Link } from 'react-router-dom';
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';

// Routs in json
import Applicant from '../Applicant.json';

// Error handler
import { Error } from './ErrorHandling';

export default function ForgetPassword() {
  // This hook use for check click button or not
  const [isClick, setIsClick] = useState(false);

  // This hook use for snackbar
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleToClose = (event, reason) => {
    if ('clickaway' == reason) return;
    setOpenSnackBar(false);
  };
  const handleClickEvent = () => {
    setOpenSnackBar(true);
  };

  // This hook, use for input class name when the client input the wrong data
  const [className, setClassName] = useState('input');

  // This hook use for save input data
  const [email, setEmail] = useState({});

  // This hook use for check errors of input
  const [formErr, setFormErr] = useState({
    email_valid_Massage: '',
  });

  // This arrow function use for put data in our save data hook
  const handleInput = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  // This arrow function use for check errors in input
  const handleSubmit = async event => {
    event.preventDefault();
    const email_valid = await Error.EmailHandling(email['Email']);

    setFormErr({
      ...formErr,
      email_valid_Massage: email_valid.massage,
    });

    if (email_valid.massage == '') {
      handleClickEvent();
    }
    if (email_valid.massage != '') {
      setClassName('wrong-input');
    } else {
      setIsClick(true);
      setClassName('input');
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="frgtPage">
        <div className="frgtPage-content">
          <h1 className="frgtPage-title">Forgot your Password?</h1>
          <p className="instruction">
            please enter an email address to recieve a verification code
          </p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="frgtPage-distance">
              <Input
                name="Email"
                placeholder="Example@gmail.com"
                type="text"
                handleChange={handleInput}
                className={className}
                error={formErr['email_valid_Massage']}
              />
            </div>
            <div className="frgtPage-distance-button">
              <Button
                className="green-btn"
                name={isClick ? <CircularProgress /> : 'send'}
                icon={false}
              />
            </div>
          </form>
          <p className="frgtPage-link">
            remember password?
            <Link to={Applicant.signin}> login</Link>
          </p>
        </div>
        <Snackbar
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          open={openSnackBar}
          autoHideDuration={5000}
          message="email sent"
          onClose={handleToClose}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleToClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}

//similar to the web forget password page it asks for email to retrieve password
import React, { useState } from "react";
import { MobileButton } from "../../components/mobile-component/button/MobileButton.jsx";
import { Input } from "../../components/input/Input";
import { OrItem } from "../../components/orItem/OrItem";
import applicant from '../../Applicant.json';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

//handle error 
import { Error } from "../ErrorHandling.js";

export default function MobileForgetPassword() {
  const [isloading, setIsLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  let button;

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
      setClassName('input');
    }
  };


  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpenSnackBar(false);
  };

  const handleClickEvent = () => {
    setOpenSnackBar(true);
  };

  if (isloading) {
    button = <MobileButton className={'green-btn'} disabler={isloading}  name={'resend'} />
  } else {
    button = <MobileButton className={'green-btn'} disabler={isloading}  name={'send'} />
  }
  // button = <button onClick={handleLogin} className="frgtPage-btn" disabled={isloading} >send</button>
  return (
    <div className="tradino">
      <h1 className="tradino-title">Tradino</h1>
      <div className="mb-frgtPage-content">
        <h1 className="mb-frgtPage-title">Forgot your Password?</h1>
        <p className="mb-instruction">please enter an email address to recieve a verification code</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-frgtPage-distance">
            <Input
              name="Email"
              placeholder="Example@gmail.com"
              type="text"
              handleChange={handleInput}
              className={className}
              error={formErr['email_valid_Massage']}
            />
          </div>
          {button}
        </form>
        <p className="mb-frgtPage-link">remenber password?
          <Link to={applicant.mobileSignin} style={{ color: "blue" }}> login</Link>
        </p>
        <Snackbar
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
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

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";

// Pages 
import Signup from './view/Signup'
import VerificationEmail from './view/VerificationEmail'
import Login from './view/Login'
import ForgetPassword from './view/ForgetPassword'
import NewPasswordPage from './view/NewPasswordPage'
import Error404Page from './view/404Page';
import Error500Page from './view/500Page';

// Mobile
import MobileLogin from './view/mobile/MobileLogin';
import MobileForgetPassword from './view/mobile/MobileForgetPassword';
import MobileNewPasswordPage from './view/mobile/MobileNewPasswordPage';
import MobileSignup from './view/mobile/MobileSignup';
import MobileVerficationEmail from './view/mobile/MobileVerficationEmail';
import MobileHomePage from './view/mobile/MobileHomePage';

// Routs in json
import Applicant from "./Applicant.json"

// Styles
import './styles.css';
import './view/mobile/mobileStyles.css'


export default function App() {
  const [windowWidth, setWindowWidth] = useState(1150);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if (windowWidth < 480) {
    return (
      <Router>
      <Switch>
        <Route path={Applicant.mobileSignup} component={MobileSignup} />
        <Route path={Applicant.mobileSignin} component={MobileLogin} />
        <Route path={Applicant.mobileNewpassword} component={MobileNewPasswordPage} />
        <Route path={Applicant.mobileForgetPassword} component={MobileForgetPassword} />
        <Route path={Applicant.verificationEmail} component={MobileVerficationEmail} />
        <Route path={Applicant.mobileHomePage} component={MobileHomePage} />
        <Route path={Applicant.noPage} component={Error404Page} />
        <Route path={Applicant.defualt} component={MobileLogin} />
        {/* <PrivateRoute path="/edit-profile" component={EditProfile} />  */}
      </Switch>
    </Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route path={Applicant.defualt} component={Login} />
          <Route path={Applicant.signup} component={Signup} />
          <Route path={Applicant.signin} component={Login} />
          <Route path={Applicant.newpassword} component={NewPasswordPage} />
          <Route path={Applicant.forgetPassword} component={ForgetPassword} />
          <Route path={Applicant.verificationEmail} component={VerificationEmail} />
          <Route path={Applicant.noPage} component={Error404Page} />
          {/* <PrivateRoute path="/edit-profile" component={EditProfile} />  */}
        </Switch>
      </Router>
    )
  }
}


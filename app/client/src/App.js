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
import AnalyzePage from './view/web/analysePage/AnalyzePage';
import HomePage from './view/web/homePage/HomePage';

// Mobile
import MobileLogin from './view/mobile/MobileLogin';
import MobileForgetPassword from './view/mobile/MobileForgetPassword';
import MobileNewPasswordPage from './view/mobile/MobileNewPasswordPage';
import MobileSignup from './view/mobile/MobileSignup';
import MobileVerficationEmail from './view/mobile/MobileVerficationEmail';
import MobileHomePage from './view/mobile/MobileHomePage';
import MobileSearchPage from './view/mobile/MobileSearchPage';
import MobileAutoPageAnalyze from './view/mobile/MoblieAutoPageAnalyze';
import MobileFirstPage from './view/mobile/MobileFirstPage';
import MobileStrategyPage from './view/mobile/MobileStrategyPage';
import MobileBuyStrategy from './view/mobile/MobileBuyStrategy';
import MobileMoreSignal from './view/mobile/MobileMoreSignal';
// Routs in json
import Applicant from "./Applicant.json"

// Styles
import './styles.css';
import './view/mobile/mobileStyles.css'


export default function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    if (window.location.pathname == '/') {
      window.location.pathname = Applicant.signin;
    }
  },[])

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
          <Route path={Applicant.mobileAutoPageAnalyzer} component={MobileAutoPageAnalyze} />
          <Route path={Applicant.mobileVerificationEmail} component={MobileVerficationEmail} />
          <Route path={Applicant.mobileSignup} component={MobileSignup} />
          <Route path={Applicant.mobileSignin} component={MobileLogin} />
          <Route path={Applicant.mobileNewpassword} component={MobileNewPasswordPage} />
          <Route path={Applicant.mobileHomePage} component={MobileHomePage} />
          <Route path={Applicant.mobileSearchPage} component={MobileSearchPage} />
          <Route path={Applicant.mobileFisrtPage} component={MobileFirstPage} />
          <Route path={Applicant.mobileStrategyPage} component={MobileStrategyPage}/>
          <Route path={Applicant.mobileMoreSignal} component={MobileMoreSignal}/>
          <Route path={Applicant.mobileBuyStrategy} component={MobileBuyStrategy}/>
          <Route path={Applicant.mobileforgetPassword} component={MobileForgetPassword} />
          <Route component={Error404Page} />
          <Route path={Applicant.defualt} component={MobileLogin}/>
          {/*<Route path={Applicant.defualt} component={MobileLogin} />*/}
          {/* <PrivateRoute path="/edit-profile" component={EditProfile} />  */}
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          {
            window.location.pathname == Applicant.defualt ? <Route component={Login}  /> : null 
          }
          <Route path={Applicant.signup} component={Signup} />
          <Route path={Applicant.signin} component={Login} />
          <Route path={Applicant.newpassword} component={NewPasswordPage} />
          <Route path={Applicant.forgetPassword} component={ForgetPassword} />
          <Route path={Applicant.verificationEmail} component={VerificationEmail} />
          <Route path={Applicant.homePage} component={HomePage} />
          <Route path={Applicant.autoAnalyzePage} component={AnalyzePage} />
          <Route path={Applicant.noPage} component={Error404Page} />
          <Route path={Applicant.serverError} component={Error500Page} />
          <Route component={Error404Page} />
          <Route path={Applicant.defualt} component={Login} />
          {/* <PrivateRoute path="/edit-profile" component={EditProfile} />  */}
        </Switch>
      </Router>
    )
  }
}



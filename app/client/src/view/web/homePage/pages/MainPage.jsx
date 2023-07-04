// This page is the main page that contain the meno and pictures
import React from 'react';

// SVG icons we use
import SearchLogo from '../../../../assets/icon/search.svg';
import FilterLogo from '../../../../assets/icon/filter.svg';
import StrategyLogo from '../../../../assets/icon/strategy.svg';
import SignalLogo from '../../../../assets/icon/signal.svg';
import StarLogo from '../../../../assets/icon/star.svg';
import CrossLogo from '../../../../assets/icon/cross.svg';
import HamburgerMenuLogo from '../../../../assets/icon/hamburgerMenu.svg';

// Components
import { Button } from '../../../../components/button/Button';
import { Link } from 'react-router-dom';
import Card from '../../../../components/web-components/card/Card';

// Images for slider
import Ax1 from '../../../../assets/images/images.png';
import Ax2 from '../../../../assets/images/images2.png';
import Ax3 from '../../../../assets/images/index.png';

export default function MainPage() {
  return (
    <div className="home">
      <nav className="navbar-body">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i>
            <img src={HamburgerMenuLogo} alt="Menu" />
          </i>
        </label>
        <label className="logo">
          <img src={SearchLogo} alt="" />
        </label>
        <ul>
          <li>
            <label htmlFor="check" className="cross">
              <i>
                <img src={CrossLogo} alt="cross" />
              </i>
            </label>
          </li>
          <li>
            <Link to="/" className="upside">
              Home
            </Link>
          </li>
          <li>
            <Link to="/auto-analyse-page" className="upside">
              Auto Analyse with A.I.
            </Link>
          </li>
          <li>
            <Link to="/" className="upside">
              Strategy
            </Link>
          </li>
          <li>
            <Link to="/" className="upside">
              Filter
            </Link>
          </li>
          <li>
            <Link to="/" className="upside">
              Signals
            </Link>
          </li>
          <li>
            <Link to="/" className="upside">
              Watch list
            </Link>
          </li>
          <li>
            <Link to="/" className="upside">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/" className="upside upside-last">
              About us
            </Link>
          </li>
          <li className="upside upside-last-1">
            <Button name="Login" />
          </li>
        </ul>
      </nav>

      <div className="images">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <div className="slide first">
              <img src={Ax1} alt="" />
            </div>
            <div className="slide">
              <img src={Ax2} alt="" />
            </div>
            <div className="slide">
              <img src={Ax3} alt="" />
            </div>
            <div className="navigation-auto">
              <div className="auto-btn1" />
              <div className="auto-btn2" />
              <div className="auto-btn3" />
            </div>
            <div className="navigation-manual">
              <label htmlFor="radio1" className="manual-btn" />
              <label htmlFor="radio2" className="manual-btn" />
              <label htmlFor="radio3" className="manual-btn" />
            </div>
          </div>
        </div>
      </div>

      <div className="TODO" />
      <div className="home-menu-cards">
        <Card name="Auto Analyse with A.I." image={StarLogo} alt="A.I." />
        <Card
          name="Copy Trading"
          image={SignalLogo}
          alt="Copy Trading Picture"
        />
        <Card name="Strategy" image={StrategyLogo} alt="Strategy Picture" />
        <Card name="Filter" image={FilterLogo} alt="Filter Picture" />
      </div>
    </div>
  );
}

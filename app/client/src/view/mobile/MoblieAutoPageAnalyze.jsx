//this component implement the auto analyze page in mobile
import React, { useState, useEffect } from "react";
//input range component
import { RangeInput } from "../../components/mobile-component/range-input/RangeInput";
//icon
import back from '../../assets/icon/black-back.svg';
import bearish from '../../assets/icon/bearish.svg';
import bullish from '../../assets/icon/bullish.svg';

//links
import applicant from '../../Applicant.json';

//components
import { Link } from "react-router-dom";
import { MobileButton } from "../../components/mobile-component/button/MobileButton";
import { Rating } from "../../components/mobile-component/rating/Rating";
import ChartView from "../web/analysePage/ChartView";

export default function MobileAutoPageAnalyze() {
  //this calculate the width of window
  const [windowWidth, setWindowWidth] = useState(480);
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  //this hook shows the percent of people who were satisfied 
  const [goodRate, setGoodRate] = useState('60');
  //whether the alert button pressed or not
  const [alertIsShown, setAlertIsShown] = useState(false);
  const [settingNum, setSettingNum] = useState({
    sr: 1,
    dy: 1,
    fibo: 1,
    fiboRet: 1,
    harmonic: 1,
    chanel: 1,
  })
  const [topNavChoose, setTopNavChoose] = useState({
    autoTchnical: true,
    favoriteTools: false,
    andicator: false,
    similar: false
  });
  const [data, setData] = useState({
    sr: 0,
    dy: 0,
    fibo: 0,
    fiboRet: 0,
    harmonic: 0,
    chanel: 0,
  });
  const max = 10;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    if (id == 'autoTchnical' || id == 'favoriteTools' || id == 'andicator' || id == 'similar') {
      setTopNavChoose({
        autoTchnical: false,
        favoriteTools: false,
        andicator: false,
        similar: false
      });
      setTopNavChoose(prev => {
        return {
          ...prev,
          [id]: true,
        };
      });
    }
    if (id == 'createAlarm') {
      setAlertIsShown(true)
    }
  }

  return (
    <div className="mb-analyzePge-content">
      <div className="white">
        <Link to={applicant.mobileHomePage}>
          <img className='mb-back-icon-analyzePge'
            aria-label="img"
            src={back} />
        </Link>
        <div className="mb-analyzePag-chart">
          <ChartView width={windowWidth} />
        </div>
        <nav className="mb-analyzePge-top-nav">
          <pre className="mb-analyzePge-top-nav-item" onClick={handleClick} id={'autoTchnical'}>Auto Technical
            <div className={topNavChoose.autoTchnical ? "mb-analyzePge-underline" : ""}></div>
          </pre>
          <pre className="mb-analyzePge-top-nav-item" onClick={handleClick} id={'favoriteTools'}>Favorite Tools
            <div className={topNavChoose.favoriteTools ? "mb-analyzePge-underline" : ""}></div>
          </pre>
          <span className="mb-analyzePge-top-nav-item" onClick={handleClick} id={'andicator'}>Andicator
            <div className={topNavChoose.andicator ? "mb-analyzePge-underline" : ""}></div>
          </span>
          <span className="mb-analyzePge-top-nav-item" onClick={handleClick} id={'similar'}>Similar
            <div className={topNavChoose.similar ? "mb-analyzePge-underline" : ""}></div>
          </span>
        </nav>
        <div className="mb-analyzePge-boxes">

          <RangeInput label={'s/r'} name={'sr'} max={max} />
          <RangeInput label={'dy/sr'} name={'dy'} handleChange={handleChange} max={max} data={data.dy} />
          <RangeInput label={'fibo'} name={'fibo'} handleChange={handleChange} max={max} data={data.fibo} />
          <RangeInput label={'fibo-ret'} name={'fiboRet'} handleChange={handleChange} max={max} data={data.fiboRet} />
          <RangeInput label={'harmonic'} name={'harmonic'} handleChange={handleChange} max={max} data={data.harmonic} />
          <RangeInput label={'chanel'} name={'chanel'} handleChange={handleChange} max={max} data={data.chanel} />
        </div>
      </div>
      {alertIsShown && <div className="mb-alertPge-content">
        <h2>Alert setting</h2>
        <label className="mb-alertPge-label-big" htmlFor="choose-tool">Choose tools</label>
        <select className="mb-alertPge-select-big" id="choose-tool">
          <option></option>
        </select>
        <div className="row">
          <label className="mb-alertPge-label-small" htmlFor="type-collision">Types of collision</label>
          <span className="mb-alertPge-distance-label"></span>
          <label className="mb-alertPge-label-small" htmlFor="how-announce">How to announce</label>
        </div>
        <div className="row">
          <select className="mb-alertPge-select-small" id="type-collision">
            <option></option>
          </select>
          <span className="mb-alertPge-distance"></span>
          <select className="mb-alertPge-select-small" id="how-announce">
            <option></option>
          </select>
        </div>
        <label className="mb-alertPge-label-big" htmlFor="expiration">Expiration time</label>
        <select className="mb-alertPge-select-big" id="expiration">
          <option></option>
        </select>
        <label className="mb-alertPge-label-big" htmlFor="alert-name">Alert name</label>
        <select className="mb-alertPge-select-big" id="alert-name">
          <option></option>
        </select>
        <MobileButton className={'mb-black-btn'} name={'Done'} />
      </div>}
      <div className="mb-analyzePge-createalarm-part">
        <div className="mb-analyzePge-2white-content">
          <h4>What's your idea?</h4>
          <div className="mb-analyzePge-createalarm-idea-button">
            <div className="mb-analyzePge-decrease-button wrapper ">
              <img className='mb-idea-btn-icon-analyzePge'
                aria-label="img"
                src={bearish} />
              <button>Bearish</button>
            </div>
            <div className="mb-analyzePge-increase-button wrapper ">
              <img className='mb-idea-btn-icon-analyzePge'
                aria-label="img"
                src={bullish} />
              <button>Bullish</button>
            </div>
          </div>
          <h5>people's idea</h5>
          <div className="mb-analyzePge-people-content">
            <div className="row">
              <Rating goodRate={goodRate} />
              <select >
                <option value={'24H'}>24H</option>
                <option >12H</option>
                <option >9H</option>
                <option >6H</option>
                <option >3H</option>
              </select>
            </div>
            <div className="row">
              <img className='mb-idea-btn-icon-analyzePge'
                aria-label="img"
                src={goodRate > 50 ? bullish : bearish} />
              <span>{goodRate > 50 ? 'Good' : 'Bad'} in 24H</span>
            </div>
          </div>
        </div>
        <MobileButton id={'createAlarm'} handleChange={handleClick} className="mb-green-btn" name='+create alarm' icon={false} />
      </div>
    </div>
  );
}

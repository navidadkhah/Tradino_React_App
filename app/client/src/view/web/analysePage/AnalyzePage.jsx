// This component implement the auto analyze page in Web
import React, { useState } from 'react';

// Input range component
import { RangeInput } from '../../../components/web-components/range-input/rangeInput';

// Component
import { Button } from '../../../components/button/Button';
import ChartView from './ChartView';
import ChartShadowLine from './ChartShadowLine';
import ChartDySrShadow from './ChartDySrShadow';
import ChartDySrBody from './ChartDySrBody';
import ChartFibo from './ChartFibo';
import { Rating } from '../../../components/web-components/rate/Rating';

// Svg icons
import bearish from '../../../assets/icon/bearish.svg';
import bullish from '../../../assets/icon/bullish.svg';

export default function AutoAnalyzePage() {
  const [timeRate, setTimeRate] = useState('24H');
  const [topNavChoose, setTopNavChoose] = useState({
    autoTchnical: true,
    favoriteTools: false,
    andicator: false,
    similar: false,
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

  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Test range input
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    let backgroundSize = `${(value * 100) / max}% 100%`;
    return { backgroundSize: `${(value * 100) / max}% 100%` };
  };

  const handleClick = e => {
    e.preventDefault();
    let id = e.currentTarget.id;
    if (
      id == 'autoTchnical' ||
      id == 'favoriteTools' ||
      id == 'andicator' ||
      id == 'similar'
    ) {
      setTopNavChoose({
        autoTchnical: false,
        favoriteTools: false,
        andicator: false,
        similar: false,
      });
      setTopNavChoose(prev => {
        return {
          ...prev,
          [id]: true,
        };
      });
    }
  };

  const handleRate = () => {
    var e = document.getElementById('ddlViewBy');
    setTimeRate(e.value);
  };

  return (
    <div className="analyze-page">
      <div className="analyzePag-chart">
        <ChartView />
        {/* <ChartShadowLine />
        <ChartDySrShadow />
        <ChartDySrBody />
        <ChartFibo /> */}
      </div>
      <div className="analyzePage-content">
        <nav className="analyzePage-top-nav">
          <pre
            className="analyzePage-top-nav-item"
            onClick={handleClick}
            id={'autoTchnical'}
          >
            Auto Technical
            <div
              className={
                topNavChoose.autoTchnical ? 'analyzePage-underline' : ''
              }
            />
          </pre>
          <pre
            className="analyzePage-top-nav-item"
            onClick={handleClick}
            id={'favoriteTools'}
          >
            Favorite Tools
            <div
              className={
                topNavChoose.favoriteTools ? 'analyzePage-underline' : ''
              }
            />
          </pre>
          <pre
            className="analyzePage-top-nav-item"
            onClick={handleClick}
            id={'andicator'}
          >
            Andicator
            <div
              className={topNavChoose.andicator ? 'analyzePage-underline' : ''}
            />
          </pre>
          <pre
            className="analyzePage-top-nav-item"
            onClick={handleClick}
            id={'similar'}
          >
            Similar
            <div
              className={topNavChoose.similar ? 'analyzePage-underline' : ''}
            />
          </pre>
          <pre
            className="analyzePage-top-nav-item"
            onClick={handleClick}
            id={'another_one'}
          >
            another one
            <div
              className={
                topNavChoose.another_one ? 'analyzePage-underline' : ''
              }
            />
          </pre>
          <pre
            className="analyzePage-top-nav-item"
            onClick={handleClick}
            id={'another_one'}
          >
            another one
            <div
              className={
                topNavChoose.another_one ? 'analyzePage-underline' : ''
              }
            />
          </pre>
        </nav>

        <div className="analyzePage-boxes">
          <div className="analyzePage-boxes-box">
            <RangeInput
              label={'s/r'}
              name={'sr'}
              handleChange={handleChange}
              max={max}
              data={data.sr}
            />
            <RangeInput
              label={'dy/sr'}
              name={'dy'}
              handleChange={handleChange}
              max={max}
              data={data.dy}
            />
            <RangeInput
              label={'fibo'}
              name={'fibo'}
              handleChange={handleChange}
              max={max}
              data={data.fibo}
            />
            <RangeInput
              label={'fibo-ret'}
              name={'fiboRet'}
              handleChange={handleChange}
              max={max}
              data={data.fiboRet}
            />
            <RangeInput
              label={'harmonic'}
              name={'harmonic'}
              handleChange={handleChange}
              max={max}
              data={data.harmonic}
            />
            <RangeInput
              label={'chanel'}
              name={'chanel'}
              handleChange={handleChange}
              max={max}
              data={data.chanel}
            />
            <div className="analyzePage-boxes-box-button">
              <Button icon={false} className="green-btn" name="+create alarm" />
            </div>
            <div className="analyzePage-2white-content">
              <h4>What's your idea?</h4>
              <div className="analyzePage-2white-content-button">
                <button>
                  <img src={bearish} alt="" /> Bearish
                </button>
                <button>
                  <img src={bullish} alt="" />
                  Bullish
                </button>
              </div>
              <div className="analyzePage-2white-content-idea">
                <h4>people ideas</h4>
                <div className="box-ideas">
                  <div className="box-ideas-1">
                    <span>
                      <Rating goodRate={62} />
                    </span>
                    <select onChange={handleRate} id="ddlViewBy">
                      <option>24H</option>
                      <option>12H</option>
                      <option>9H</option>
                      <option>6H</option>
                      <option>3H</option>
                    </select>
                  </div>
                  <div className="box-ideas-2">
                    <img src={bullish} alt="" />
                    <h4>Good in {timeRate}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//in this component we show the result of the strategy
import React from 'react';
//style
import './strategyResult.css';
//icon
import next from '../../../assets/icon/next.svg';
import star from '../../../assets/icon/star.svg';
import { Link } from 'react-router-dom';
//link
import applicant from '../../../Applicant.json';

export function StrategyResult({
  bigImg,
  smallImg,
  name,
  author,
  returnRate,
  strategyImg,
  winRate,
  riskReward,
  timeFrame,
}) {
  return (
    <div className="mb-strategy-result-content">
      <div className="mb-strategy-result-first-row">
        <div className="mb-strategy-result-first-row-img">
          <img className="mb-strategy-result-img-big" src={bigImg} />
          <img className="mb-strategy-result-img-small" src={smallImg} />
        </div>
        <div className="mb-strategy-result-distance">
          <div className="mb-strategy-result-title">{name}</div>
          <div className="mb-strategy-result-author">by {author}</div>
        </div>
        <img className="mb-strategy-star-icon-result" src={star} />
        <img className="mb-strategy-img-result" src={strategyImg} />
      </div>
      <div className="mb-strategy-result-second-row">
        <pre>
          Win Rate: <span style={{ color: 'green' }}>{winRate}%</span>
        </pre>
        <pre>
          Risk/Reward: <span style={{ color: 'green' }}>{riskReward}</span>{' '}
        </pre>
      </div>
      <div className="mb-strategy-result-third-row">
        <pre>Time Frame:{timeFrame}%</pre>
        <pre> Return: {returnRate}h</pre>
      </div>
      <Link to={applicant.mobileBuyStrategy}>
        <img className=" mb-strategy-result-next-icon" src={next} />
      </Link>
    </div>
  );
}

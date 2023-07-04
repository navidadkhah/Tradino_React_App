//in this copmpnent we make the buy strategy page
import React, { useState } from "react";
import { Link } from "react-router-dom";
//icon
import more from '../../assets/icon/more.svg';
import less from '../../assets/icon/less.svg';
import info from '../../assets/icon/info.svg';
//image
import us from '../../assets/images/american-flag.jpg';
import japan from '../../assets/images/japan-flag.jpg';
import chart1 from '../../assets/images/blue-chart.jpg';
import chart2 from '../../assets/images/chart2.jpg';
//link
import applicant from '../../Applicant.json';
import { MobileButton } from "../../components/mobile-component/button/MobileButton";
import { MobileBottomNav } from "../../components/mobile-component/bottom-navbar/MobileBottomNav";
import { MobileSignalClosedBox } from "../../components/mobile-component/signal-closed/MobileSignalClosedBox";

export default function MobileMoreSignal() {
  const [navChoose, setNavChoose] = useState({
    watchlist: false,
    filter: false,
    home: true,
    strategy: false,
    signal: false
  });
  let name = 'classic name1';
  let author = 'john copper';
  const noLiveNote = "now this strategy does'nt have any live signal. "
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id == 'watchlist' || id == 'filter'
      || id == 'home' || id == 'strategy' || id == 'signal') {
      setNavChoose({
        watchlist: false,
        filter: false,
        home: false,
        strategy: false,
        signal: false,
      });
      setNavChoose(prev => {
        return {
          ...prev,
          [id]: true
        }
      })
    }
  }
  return (
    <div className="tradino">
      <div className="mb-moreSignal-content ">
        <div className="mb-moreSignal-green-title-content">
          <h1 >{name}</h1>
          <h4>{author}</h4>
        </div>
        <div className="mb-moreSignal-grey-content">

          <div className="mb-moreSignal-title-row">
            <h4>live signals</h4>
            <img
              aria-label="info"
              src={info} />
          </div>
          <div className="mb-moreSignal-closedSignals blur">
            <MobileSignalClosedBox bigImg={us} smallImg={japan} hasMore={true} />
            <MobileSignalClosedBox bigImg={us} smallImg={japan} hasMore={true} />
          </div>
          <div className="mb-buyStrategy-big-line"></div>
          <div className="mb-moreSignal-title-row">
            <h4>closed signals</h4>
            <img
              aria-label="info"
              src={info} />
          </div>
          <div className="mb-moreSignal-closedSignals">
            <MobileSignalClosedBox bigImg={us} smallImg={japan} hasMore={true} chartimg={chart2} />
            <MobileSignalClosedBox bigImg={us} smallImg={japan} hasMore={true} chartimg={chart2} />
          </div>
          <div className="mb-general-bottom-space"></div>
        </div>
      </div>
      <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
    </div>
  );
}
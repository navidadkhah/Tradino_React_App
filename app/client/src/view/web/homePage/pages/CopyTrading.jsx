// This page is Copy trading that we use

import React, { useState } from 'react';

// SVG icons we use
import SignalLogo from '../../../../assets/icon/signal.svg';

// Component
import BestCard from '../../../../components/web-components/bestCard/BestCard';

export default function CopyTrading() {
  const [data, setData] = useState('forex');

  // This function for set strategy elements
  function tab() {
    const forex = document.getElementById('forex1');
    const crypto = document.getElementById('crypto1');
    const stock = document.getElementById('stock1');
    forex.addEventListener('click', () => {
      forex.className = 'strategy-page-header-selected';
      crypto.className = 'strategy-page-header-unselected';
      stock.className = 'strategy-page-header-unselected';
      setData('Forex');
    });
    crypto.addEventListener('click', () => {
      crypto.className = 'strategy-page-header-selected';
      forex.className = 'strategy-page-header-unselected';
      stock.className = 'strategy-page-header-unselected';
      setData('Crypto');
    });
    stock.addEventListener('click', () => {
      stock.className = 'strategy-page-header-selected';
      forex.className = 'strategy-page-header-unselected';
      crypto.className = 'strategy-page-header-unselected';
      setData('Stock');
    });
  }

  return (
    <div className="copy-trading-page">
      <div className="copy-trading-page-up">
        <div className="copy-trading-gif">GIF</div>

        <div className="copy-trading-text">
          <div className="copy-trading-text-header">
            <img src={SignalLogo} alt="signal logo" width={50} height={50} />
            Copy Trading
          </div>
          <div className="copy-trading-text-content">
            <span>Find investros you believe in and</span>
            <span>replicate their action in real time</span>
          </div>
          <div className="copy-traidng-text-button">
            <button>Copy Trading</button>
          </div>
        </div>
      </div>

      <div className="copy-trading-header">
        <button
          className="copy-trading-header-selected"
          id="forex1"
          onClick={tab}
        >
          Forex
        </button>
        <button
          className="copy-trading-header-unselected"
          id="stock1"
          onClick={tab}
        >
          Stock
        </button>
        <button
          className="copy-trading-header-unselected"
          id="crypto1"
          onClick={tab}
        >
          Crypto
        </button>
      </div>

      <div className="copy-trading-content">
        <h1 className="copy-trading-content-header">Best Trader in {data}</h1>
        <div className="copy-trading-content-cards">
          <BestCard />
          <BestCard />
          <BestCard />
          <BestCard />
          <BestCard />
          <BestCard />
          <BestCard />
        </div>
      </div>
    </div>
  );
}

// This page is about Strategys that show us the best one
import React from 'react';

// SVG icons we use
import StrategyLogo from '../../../../assets/icon/strategy.svg';

// Components
import WinrateCard from '../../../../components/web-components/winrate-card/WinrateCard';

export default function StrategyPage() {
  // This function for set strategy elements
  function tab() {
    const forex = document.getElementById('forex');
    const crypto = document.getElementById('crypto');
    const stock = document.getElementById('stock');
    forex.addEventListener('click', () => {
      forex.className = 'strategy-page-header-selected';
      crypto.className = 'strategy-page-header-unselected';
      stock.className = 'strategy-page-header-unselected';
    });
    crypto.addEventListener('click', () => {
      crypto.className = 'strategy-page-header-selected';
      forex.className = 'strategy-page-header-unselected';
      stock.className = 'strategy-page-header-unselected';
    });
    stock.addEventListener('click', () => {
      stock.className = 'strategy-page-header-selected';
      forex.className = 'strategy-page-header-unselected';
      crypto.className = 'strategy-page-header-unselected';
    });
  }

  return (
    <div className="strategy-page">
      <div className="strategy-page-header">
        <button
          className="strategy-page-header-selected"
          id="forex"
          onClick={tab}
        >
          Forex
        </button>
        <button
          className="strategy-page-header-unselected"
          id="stock"
          onClick={tab}
        >
          Stock
        </button>
        <button
          className="strategy-page-header-unselected"
          id="crypto"
          onClick={tab}
        >
          Crypto
        </button>
      </div>
      <h1 className="strategy-page-text">
        <img
          src={StrategyLogo}
          alt="strategy logo"
          height={40}
          width={40}
          className="strategy-page-logo"
        />
        Strategy
      </h1>
      <div className="strategy-page-content">
        <div className="strategy-page-content-borders">
          <div className="strategy-page-content-borders-border">
            <div className="strategy-page-content-borders-border-header">
              Best Winrate
            </div>
            <WinrateCard name="classic name 1" />
            <WinrateCard name="classic name 2" />
            <WinrateCard name="classic name 3" />
          </div>
        </div>
        <div className="strategy-page-content-gif">
          <span>with true strategy</span>
          <span>make money and</span>
          <span>text</span>
          <div className="strategy-page-content-gif-gif">
            <span>png GIF</span>
          </div>
          <div className="strategy-page-content-gif-buttons">
            <button>Explore</button>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

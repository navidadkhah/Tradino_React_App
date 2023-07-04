// This is home page of the Tradino website that contains Strategy page, Auto Analyse page,
// Signal and filter page; provide this servises

import React from 'react';

// Each page we use in HomePage off application
import MainPage from './pages/MainPage';
import AutoAnalysPage from './pages/AutoAnalysPage';
import StrategyPage from './pages/StrategyPage';
import FilterPage from './pages/FilterPage';
import CopyTrading from './pages/CopyTrading';
import FooterPage from './pages/FooterPage';

export default function HomePage() {
  return (
    <div className="main">
      <MainPage />
      <AutoAnalysPage />
      <StrategyPage />
      <FilterPage />
      <CopyTrading />
      <FooterPage />
    </div>
  );
}

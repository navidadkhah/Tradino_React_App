// This page is about filter trading that we use
import React from 'react';

// Component we use
import FilterCard from '../../../../components/web-components/filter-card/FilterCard';

// SVG icons we use
import FilterLogo from '../../../../assets/icon/filter.svg';

export default function FilterPage() {
  return (
    <div className="filter-page">
      <div className="filter-create">
        <div className="filter-create-header">
          <img src={FilterLogo} alt="filter logo" />
          <span>Filter</span>
        </div>
        <div className="filter-create-content">
          <span>Find your filter our create</span>
          <span>yours and buy</span>
          <span>Them.</span>
        </div>
        <div className="filter-create-button">
          <button>Explore</button>
          <button>Create</button>
        </div>
      </div>
      <div className="filter-slide-track-1">
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </div>
      <div className="filter-slide-track-2">
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </div>
    </div>
  );
}

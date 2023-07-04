import React from 'react';

import './winrateCard.css';

export default function WinrateCard({ name }) {
  return (
    <div className="winrate-card">
      <span>{name}</span>
    </div>
  );
}

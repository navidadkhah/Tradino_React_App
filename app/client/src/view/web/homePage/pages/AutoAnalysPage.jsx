// This page is about auto analyses trading that we use
import React, { useState } from 'react';

// SVG icons we use
import StrategyLogo from '../../../../assets/icon/strategy.svg';

// Components
import { Button } from '../../../../components/button/Button';
import ModalAutoAnalyse from '../ModalAutoAnalyse';

export default function AutoAnalysPage() {
  // This hook use for we know when modal is open
  const [openModal, setOpenModal] = useState(false);

  const handleee = () => {
    setOpenModal(true);
  };

  return (
    <div className="auto-analys-page">
      <h1 className="auto-analys-header">
        <img
          src={StrategyLogo}
          alt="strategy logo"
          height={50}
          width={50}
          className="auto-analys-logo"
        />
        Auto Analyse with A.I.
      </h1>
      <div className="auto-analys-main">
        <div className="auto-analys-content">
          <h1>some text</h1>
          <h1>some text</h1>
          <h1>some text</h1>
          <Button
            name="Find Simbols To Auto Analyse"
            className="green-btn"
            openModal={openModal}
            hasModal={true}
            setOpenModal={setOpenModal}
            handleChange={handleee}
          />
          {openModal && <ModalAutoAnalyse setOpenModal={setOpenModal} />}
        </div>
        <div className="auto-analys-gif">Gif</div>
      </div>
    </div>
  );
}

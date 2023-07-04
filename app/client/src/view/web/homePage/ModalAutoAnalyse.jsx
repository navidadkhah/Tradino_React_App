// This is modal page that show use the different stocks and we can search in it
import React from 'react';

// Icon svg we use
import BackLogo from '../../../assets/icon/back-tab.svg';
import SearchLogo from '../../../assets/icon/search.svg';

// Component
import { Input } from '../../../components/input/Input';

export default function ModalAutoAnalyse({ setOpenModal }) {
  // This function for set strategy elements
  function tab() {
    const forex = document.getElementById('modal-forex');
    const crypto = document.getElementById('modal-crypto');
    const stock = document.getElementById('modal-stock');
    forex.addEventListener('click', () => {
      forex.className = 'modal-container-selected';
      crypto.className = 'modal-container-unselected';
      stock.className = 'modal-container-unselected';
    });
    crypto.addEventListener('click', () => {
      crypto.className = 'modal-container-selected';
      forex.className = 'modal-container-unselected';
      stock.className = 'modal-container-unselected';
    });
    stock.addEventListener('click', () => {
      stock.className = 'modal-container-selected';
      forex.className = 'modal-container-unselected';
      crypto.className = 'modal-container-unselected';
    });
  }

  // This function for set strategy elements
  const handleee = () => {
    setOpenModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-header">
          <img
            src={BackLogo}
            alt="back to menu"
            width={20}
            height={20}
            onClick={handleee}
          />
          <span>Search</span>
        </div>
        <div className="modal-container-body">
          <div className="modal-container-slider">
            <button
              className="modal-container-selected"
              id="modal-forex"
              onClick={tab}
            >
              Forex
            </button>
            <button
              className="modal-container-unselected"
              id="modal-stock"
              onClick={tab}
            >
              Stock
            </button>
            <button
              className="modal-container-unselected"
              id="modal-crypto"
              onClick={tab}
            >
              Crypto
            </button>
          </div>

          <Input
            className="modal-container-search"
            placeholder="find your symbol"
          />
        </div>
      </div>
    </div>
  );
}

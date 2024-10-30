// ResultPopup.js
import React from 'react';
import './ResultPopup.scss';

const ResultPopup = ({ isOpen, onClose, coinsWon, cashWon, multiplier, image, layer1 }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Congratulations!</h2>
        <p>{layer1}</p>
        <img src={image} alt="Prize" className="prize-image" />
        <p>You won:</p>
        <div className="prize-details">
          <span>Coins: {coinsWon}</span>
          <span>Cash: ${cashWon}</span>
          <span>Multiplier: {multiplier}x</span>
        </div>
      </div>
    </div>
  );
};

export default ResultPopup;

// src/components/DisplayBalance.js
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './DisplayBalance.scss';

const DisplayBalance = () => {
  // Destructuring with default values
  const {
    coins = 0,
    cash = 0,
    lastWinAmount = 0,
    winHistory = [],
    message = ''
  } = useSelector((state) => state.game);

  return (
    <div className="display-balance">
      <h2>Your Balance</h2>
      <p>Coins: {coins}</p>
      <p>Cash: ₹{cash.toFixed(2)}</p>
      {lastWinAmount > 0 && <p>Last Win: {lastWinAmount} coins</p>}
      {message && <p className="message">{message}</p>} {/* Render message only if it exists */}
      
      <h3>Win History</h3>
      <ul>
        {winHistory.slice(-5).map((win, index) => (
          <li key={index}>{win} coins</li> // Use a unique identifier if available
        ))}
      </ul>
    </div>
  );
};

// Optionally, you can define prop types for better type checking
DisplayBalance.propTypes = {
  coins: PropTypes.number,
  cash: PropTypes.number,
  lastWinAmount: PropTypes.number,
  winHistory: PropTypes.arrayOf(PropTypes.number),
  message: PropTypes.string
};

export default DisplayBalance;

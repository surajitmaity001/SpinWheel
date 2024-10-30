// src/components/RewardsPage/BalanceCard.jsx
import React from 'react';
import './BalanceCard.scss';

const BalanceCard = () => (
    <div className="balance-card">
        <div className="balance-details">
            <h3>Current Balance</h3>
            <p>Cash: ₹1200</p>
            <p>Points: 3500</p>
        </div>
        <div className="balance-actions">
            <button>Withdraw Cash</button>
            <button>Convert Points</button>
        </div>
    </div>
);

export default BalanceCard;

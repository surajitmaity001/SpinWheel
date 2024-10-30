// src/components/RewardsPage/AchievementCard.jsx
import React from 'react';
import './AchievementCard.scss';

const AchievementCard = ({ reward }) => (
    <div className={`achievement-card ${reward.unlocked ? 'unlocked' : 'locked'}`}>
        <div className="card-content">
            <h4>{reward.title}</h4>
            <p>{reward.description}</p>
            <div className="reward-info">
                {reward.unlocked ? (
                    <span className="reward-amount">{reward.reward} {reward.unit}</span>
                ) : (
                    <span className="locked-text">Locked</span>
                )}
            </div>
        </div>
    </div>
);

export default AchievementCard;

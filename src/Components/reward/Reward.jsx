import React, { useState, useEffect } from 'react';
import { FaTrophy, FaStar, FaGift, FaMedal } from 'react-icons/fa'; // Icons from react-icons library
import './Reward.scss';

import rewardsData from '../../assets/reward.json';

const Reward = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    setRewards(rewardsData);
  }, []);

  return (
    <div className="reward-app">
      <h1>Achievements & Badges</h1>
      {rewards.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

const Category = ({ category }) => (
  <div className="reward-category">
    <h2>{category.category}</h2>
    <div className="achievement-list">
      {category.achievements.map((achievement, index) => (
        <AchievementCard key={index} achievement={achievement} />
      ))}
    </div>
  </div>
);

const AchievementCard = ({ achievement }) => {
  const { name, description, currentProgress, requiredProgress, reward } = achievement;
  const progressPercentage = Math.min((currentProgress / requiredProgress) * 100, 100);

  return (
    <div className="achievement-card">
      <div className="achievement-header">
        <FaMedal className="achievement-icon" /> {/* New icon for each achievement */}
        <h3>{name}</h3>
        <span className="reward-amount">
          <FaGift className="reward-icon" /> {reward} Coins
        </span>
      </div>
      <p className="achievement-description">{description}</p>
      <ProgressBar progressPercentage={progressPercentage} current={currentProgress} total={requiredProgress} />
    </div>
  );
};

const ProgressBar = ({ progressPercentage, current, total }) => (
  <div className="progress-bar-container">
    <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
    <span className="progress-text">{current}/{total}</span>
  </div>
);

export default Reward;

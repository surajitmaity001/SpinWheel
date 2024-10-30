import React from 'react';
import './HowToPlay.scss';
import { FaUserCircle, FaPlayCircle, FaCoins, FaMoneyBillWave, FaWallet } from 'react-icons/fa';

const HowToPlay = () => {
  const steps = [
    { icon: <FaUserCircle />, title: 'Log In or Sign Up', text: 'Create an account or log in to start playing and track your spins.' },
    { icon: <FaPlayCircle />, title: 'Spin the Wheel', text: 'Press Spin to play! Each spin costs a set amount, with potential big rewards.' },
    { icon: <FaCoins />, title: 'Collect Rewards', text: 'Wherever the wheel stops, win cash, coins, or bonuses!' },
    { icon: <FaMoneyBillWave />, title: 'Convert Coins', text: 'Convert collected coins into cash. 5,000 coins = ₹1. Stack up and boost your earnings.' },
    { icon: <FaWallet />, title: 'Withdraw Cash', text: 'Accumulate winnings and withdraw cash. Requests processed within 24 hours.' }
  ];

  return (
    <div className="how-to-play">
      <h2>How to Start Playing</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToPlay;

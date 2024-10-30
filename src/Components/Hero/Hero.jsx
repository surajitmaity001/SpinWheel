import React from 'react';
import './Hero.scss';
import Wheel from '../../assets/wheel.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTrophy, faStar } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero__background'></div>
      <div className='Hero__particles'></div>
      <div className='Hero__content'>
        <h1 className='Hero__title'>Spin The Wheel & Win Real Cash!</h1>
        <p className='Hero__subtitle'>Test your luck and win exciting prizes every day. Start spinning now!</p>
        <div className="wheel-image">
          <img src={Wheel} alt="wheel" className="wheel-animation" />
        </div>
        

        

        <button className='Hero__button'>Spin Now</button>
        

        <div className="Hero__icons">
          <div className="Hero__icon">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <p>Win Cash</p>
          </div>
          <div className="Hero__icon">
            <FontAwesomeIcon icon={faTrophy} className="icon" />
            <p>Exclusive Prizes</p>
          </div>
          <div className="Hero__icon">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <p>Daily Rewards</p>
          </div>
        </div>
        <div className="Hero__stats">
          <div className="stat-item">
            <h3>Top Spinner</h3>
            <p>Username</p>
          </div>
          <div className="stat-item">
            <h3>Jackpot Win</h3>
            <p>$500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

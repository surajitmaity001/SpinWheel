import React, { useState } from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGift, faSyncAlt, faWallet, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="Navigation">
      <ul className="Navigation__menu">
        <li className={`Navigation__item ${activeTab === 'home' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleTabChange('home')} className="Navigation__link">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li className={`Navigation__item ${activeTab === 'rewards' ? 'active' : ''}`}>
          <Link to="/rewards" onClick={() => handleTabChange('rewards')} className="Navigation__link">
            <FontAwesomeIcon icon={faGift} />
            <span>Rewards</span>
          </Link>
        </li>
        <li className={`Navigation__item Navigation__item--spin ${activeTab === 'spin' ? 'active' : ''}`}>
          <Link to="/spin" onClick={() => handleTabChange('spin')} className="Navigation__link">
            <FontAwesomeIcon icon={faSyncAlt} />
            <span>Spin</span>
          </Link>
        </li>
        <li className={`Navigation__item ${activeTab === 'wallet' ? 'active' : ''}`}>
          <Link to="/wallet" onClick={() => handleTabChange('wallet')} className="Navigation__link">
            <FontAwesomeIcon icon={faWallet} />
            <span>Wallet</span>
          </Link>
        </li>
        <li className={`Navigation__item ${activeTab === 'more' ? 'active' : ''}`}>
          <Link to="/more" onClick={() => handleTabChange('more')} className="Navigation__link">
            <FontAwesomeIcon icon={faEllipsisH} />
            <span>More</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// src/components/Header.js
import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ProfilePage from '../../pages/ProfilePage'; // Import the ProfilePage component
import Sidebar from './Sidebar'; // Import the Sidebar component

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfilePageOpen, setIsProfilePageOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfilePage = () => {
    setIsProfilePageOpen(!isProfilePageOpen);
  };

  return (
    <header className="Header">
      <div className="Header__toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>
      <div className="Header__logo">
        <h1>Spin ATM</h1>
      </div>
      <div className="Header__profile" onClick={toggleProfilePage}>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </div>

      {/* Sidebar Menu */}
      {isMobileMenuOpen && <Sidebar onClose={toggleMobileMenu} />}

      {/* Conditional rendering of the ProfilePage */}
      {isProfilePageOpen && <ProfilePage onClose={toggleProfilePage} />}
    </header>
  );
};

export default Header;

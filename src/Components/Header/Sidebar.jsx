// src/components/Sidebar.js
import React from 'react';
import './Sidebar.scss';

const Sidebar = ({ onClose }) => {
  return (
    <div className="Sidebar">
      <button className="Sidebar__close" onClick={onClose}>✖</button>
      <h2>Menu</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

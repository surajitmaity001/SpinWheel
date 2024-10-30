import React, { useState } from 'react';
import './BettingSystem.scss'; // Import advanced SCSS for styling

// Image Imports
import airplane from '../../assets/Wheel_image/airplane.png';
import dragon from '../../assets/Wheel_image/dragon.png';
import earth from '../../assets/Wheel_image/earth.png';
import fire from '../../assets/Wheel_image/fire.png';
import goldBox from '../../assets/Wheel_image/goldBox.png';
import rocket from '../../assets/Wheel_image/rocket.png';
import star from '../../assets/Wheel_image/star.png';
import winCap from '../../assets/Wheel_image/winCap.png';

// Images Array
const images = [
  { id: 1, name: 'Airplane', src: airplane, multiplier: '1x' },
  { id: 2, name: 'Dragon', src: dragon, multiplier: '2x' },
  { id: 3, name: 'Earth', src: earth, multiplier: '3x' },
  { id: 4, name: 'Fire', src: fire, multiplier: '5x' },
  { id: 5, name: 'Gold Box', src: goldBox, multiplier: '0.5x' },
  { id: 6, name: 'Rocket', src: rocket, multiplier: '3.5x' },
  { id: 7, name: 'Star', src: star, multiplier: '1.5x' },
  { id: 8, name: 'Win Cap', src: winCap, multiplier: '10x' },
];

const BettingSystem = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [betAmount, setBetAmount] = useState('');

  // Handle Image Selection
  const handleImageClick = (image) => {
    setSelectedImage(image);
    console.log('Selected Image:', image.name); // Output to console
  };

  // Handle Bet Amount Input
  const handleBetAmountChange = (e) => {
    setBetAmount(e.target.value);
  };

  // Place Bet Button Handler
  const placeBet = () => {
    if (selectedImage && betAmount) {
      console.log(`Placed Bet: ${betAmount} on ${selectedImage.name}`);
      // Reset state after placing the bet
      setSelectedImage(null);
      setBetAmount('');
    } else {
      console.error('Please select an image and enter a valid bet amount!');
    }
  };

  return (
    <div className="betting-section">
      <h2>Place Your Bet</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`image-card ${selectedImage?.id === image.id ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') handleImageClick(image); }}
          >
            <img src={image.src} alt={image.name} />
            <p>{image.name} - Multiplier: {image.multiplier}</p>
          </div>
        ))}
      </div>
      <div className="bet-input">
        <input
          type="number"
          placeholder="Enter Bet Amount"
          value={betAmount}
          onChange={handleBetAmountChange}
          min="1"
          className="bet-input-field"
        />
        <button onClick={placeBet} className="bet-button">Place Bet</button>
      </div>
    </div>
  );
};

export default BettingSystem;

import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import confetti from 'canvas-confetti';
import './SpinWheel.scss';
import { layer1Sections, layer2Sections } from './SpinData';
import {
  incrementSpins,
  adjustCoins,
  setSpinResult,
  toggleSpinning,
  claimBonus,
  resetStreak,
} from '../../redux/gameSlice';
import ResultPopup from './ResultPopup';

const SpinWheel = () => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const { coins, totalSpins, isSpinning, bonusClaimed } = useSelector((state) => state.game);

  const [result, setResult] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [gameRestart, setGameRestart] = useState(false); // New state for restart

  useEffect(() => {
    if (result) {
      console.log('Updated Spin Result:', result);
      setIsPopupOpen(true); // Open popup when result is set
      // Automatically enable restart after showing result
      setTimeout(() => setGameRestart(true), 3000); // 3-second delay
    }
  }, [result]);

  useEffect(() => {
    if (!isSpinning) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let angleLayer1 = 0;
    let angleLayer2 = 0;

    const stopAngleLayer1 = layer1Sections.indexOf(getRandomSection(layer1Sections));
    const stopAngleLayer2 = layer2Sections.indexOf(getRandomSection(layer2Sections));
    const totalSpinDuration = 8000;
    const startTime = performance.now();

    const spinAnimation = () => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalSpinDuration, 1);

      const easeOutQuint = (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5));

      angleLayer1 += (1 - easeOutQuint(progress)) * 0.25;
      angleLayer2 += (1 - easeOutQuint(progress)) * 0.35;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLayer(ctx, canvas, layer2Sections, 240, angleLayer2, '#000', true);
      drawLayer(ctx, canvas, layer1Sections, 150, -angleLayer1, '#fff');
      drawCenter(ctx, canvas);

      if (progress < 1) {
        requestAnimationFrame(spinAnimation);
      } else {
        dispatch(toggleSpinning(false));
        handleSpinResult(stopAngleLayer1, stopAngleLayer2);
      }
    };

    spinAnimation();
  }, [isSpinning, dispatch]);

  const getRandomSection = (sections) => {
    const randomNum = Math.random();
    let cumulativeProbability = 0;
    for (const section of sections) {
      cumulativeProbability += section.probability;
      if (randomNum <= cumulativeProbability) return section;
    }
    return sections[sections.length - 1];
  };

  const drawLayer = (ctx, canvas, sections, radius, angleOffset, borderColor, isImageLayer = false) => {
    const center = canvas.width / 2;
    const arc = (2 * Math.PI) / sections.length;

    sections.forEach((section, index) => {
      const startAngle = angleOffset + index * arc;
      const endAngle = startAngle + arc;

      ctx.fillStyle = section.color;
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle, false);
      ctx.closePath();
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.strokeStyle = borderColor;
      ctx.stroke();

      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + arc / 2);
      ctx.textAlign = 'center';

      if (isImageLayer) {
        const img = new Image();
        img.src = section.image;
        ctx.drawImage(img, radius - 60, -25, 50, 50);
        ctx.fillStyle = '#333';
        ctx.font = 'bold 18px Arial';
        ctx.fillText(section.multiplier, radius - 60 + 25, 45);
      } else {
        ctx.fillStyle = '#333';
        ctx.font = 'bold 18px Arial';
        ctx.fillText(section.label, radius - 40, 0);
      }
      ctx.restore();
    });
  };

  const drawCenter = (ctx, canvas) => {
    const center = canvas.width / 2;
    ctx.beginPath();
    ctx.arc(center, center, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ATM', center, center);
  };

  const handleSpinResult = (layer1Index, layer2Index) => {
    const layer1Result = layer1Sections[layer1Index]?.label || 'Unknown';
    const coinsWon = layer1Sections[layer1Index]?.coins || 0;
    const cashWon = layer1Sections[layer1Index]?.cash || 0;
    const multiplier = layer2Sections[layer2Index]?.multiplier || 1;
    const image = layer2Sections[layer2Index]?.image || '';

    const spinResult = { 
        layer1: layer1Result, 
        coins: coinsWon, 
        cash: cashWon, 
        multiplier: multiplier, 
        image: image 
    };

    // Update local storage with spin result
    const spinResultsArray = JSON.parse(localStorage.getItem('spinResults')) || [];
    spinResultsArray.push(spinResult);
    localStorage.setItem('spinResults', JSON.stringify(spinResultsArray));

    // Set result in state
    setResult(spinResult);
    dispatch(setSpinResult(spinResult));

  // Show alert for winnings
alert(`You won ${coinsWon} coins and ${cashWon} cash! Multiplier: ${multiplier}, Image: ${image ? image : 'No Image'}`);

    // Launch confetti if jackpot
    if (layer1Result === 'Jackpot!') {
      launchConfetti();
    }
  };

  const launchConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  };

  const spinWheel = () => {
    if (isSpinning || coins < 5) return;
    dispatch(toggleSpinning(true));
    dispatch(adjustCoins(-5));
    dispatch(incrementSpins());
    setGameRestart(false); // Reset restart state when a new spin starts
  };

  const restartGame = () => {
    setResult(null);
    setGameRestart(false);
  };

  return (
    <div className="spin-wheel">
      <canvas ref={canvasRef} width="500" height="500" />
      
      {/* Spin Button */}
      <button
        onClick={spinWheel}
        className={`spin-button ${isSpinning || coins < 5 ? 'disabled' : ''}`}
      >
        {isSpinning ? 'Spinning...' : 'Spin (5 Coins)'}
      </button>

      {/* Result Popup and Play Again Button */}
      <div className="info">
        <p>Coins: {coins}</p>
        <p>Total Spins: {totalSpins}</p>
        {!bonusClaimed && <button onClick={() => dispatch(claimBonus())}>Claim Daily Bonus</button>}
        {gameRestart && <button onClick={restartGame} className="restart-button">Play Again</button>}
      </div>
    </div>
  );
};

export default SpinWheel;

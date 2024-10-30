// SpinData.js

import airplane from '../../assets/Wheel_image/airplane.png';
import dragon from '../../assets/Wheel_image/dragon.png';
import earth from '../../assets/Wheel_image/earth.png';
import fire from '../../assets/Wheel_image/fire.png';
import goldBox from '../../assets/Wheel_image/goldBox.png';
import rocket from '../../assets/Wheel_image/rocket.png';
import star from '../../assets/Wheel_image/star.png';
import winCap from '../../assets/Wheel_image/winCap.png';

export const layer1Sections = [
    { color: '#FF6B6B', label: '50 Coin', coins: 50, cash: 0, probability: 0.15 },
    { color: '#4ECDC4', label: '100 cash', cash: 100, coins: 0, probability: 0.1 },
    { color: '#FFD93D', label: '40 Coins', coins: 40, cash: 0, probability: 0.2 },
    { color: '#1A535C', label: '-10 Coins', coins: -10, cash: 0, probability: 0.1 },
    { color: '#FF8C42', label: '25 cash', cash: 25, coins: 0, probability: 0.2 },
    { color: '#5E60CE', label: '100 Coins', coins: 100, cash: 0, probability: 0.1 },
    { color: '#B5179E', label: '-5 cash', cash: -5, coins: 0, probability: 0.05 },
    { color: '#48B1BF', label: '10 cash', cash: 10, coins: 0, probability: 0.1 },
];

export const layer2Sections = [
    { color: '#FFC6FF', multiplier: '1x', image: airplane, probability: 0.3 },
    { color: '#FFB4A2', multiplier: '2x', image: dragon, probability: 0.2 },
    { color: '#A0C4FF', multiplier: '3x', image: earth, probability: 0.15 },
    { color: '#D9ED92', multiplier: '5x', image: fire, probability: 0.1 },
    { color: '#FFADAD', multiplier: '0.5x', image: goldBox, probability: 0.1 },
    { color: '#9D4EDD', multiplier: '3.5x', image: rocket, probability: 0.05 },
    { color: '#00BBF9', multiplier: '1.5x', image: star, probability: 0.05 },
    { color: '#CAFFBF', multiplier: '10x', image: winCap, probability: 0.05 },
];

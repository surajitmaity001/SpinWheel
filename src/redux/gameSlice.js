import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: 100,
  cash: 50,
  totalSpins: 0,
  selectedImage: null,
  betAmount: 50,
  spinResult: null,
  winHistory: [],
  isSpinning: false,
  message: '',
  multiplier: 1, // Progressive multiplier based on streaks
  lastWinAmount: 0,
  bonusClaimed: false,
  lastBonusTime: null,
  showPopup: false,
  winner: null,
  spinStreak: 0, // Track the number of consecutive spins
  jackpotCount: 0, // Track the number of jackpots hit
  layer1Result: null, // Store layer1 result
  layer2Multiplier: 1, // Store multiplier from layer2 section
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setSelectedImage(state, action) {
      state.selectedImage = action.payload;
    },
    setBetAmount(state, action) {
      state.betAmount = action.payload;
    },
    incrementSpins(state) {
      state.totalSpins += 1;
      state.spinStreak += 1;
      if (state.spinStreak % 5 === 0) {
        state.multiplier += 0.5; // Increase multiplier every 5 spins
      }
    },
    adjustCoins(state, action) {
      state.coins += action.payload;
    },
    adjustCash(state, action) {
      state.cash += action.payload;
    },
    setSpinResult(state, action) {
      const { layer1, layer2, coinsWon, cashWon, multiplier } = action.payload;

      state.layer1Result = layer1;
      state.layer2Multiplier = multiplier;

      if (coinsWon) {
        state.coins += coinsWon * state.layer2Multiplier;
      }
      if (cashWon) {
        state.cash += cashWon * state.layer2Multiplier;
      }

      state.spinResult = action.payload;
      state.winHistory.push({ layer1, coinsWon, cashWon, multiplier });

      if (layer1 === 'Jackpot!') {
        state.jackpotCount += 1;
      }
    },
    toggleSpinning(state, action) {
      state.isSpinning = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    updateLastWin(state, action) {
      state.lastWinAmount = action.payload;
      state.winHistory.push({ amount: action.payload, time: Date.now() });
    },
    resetGame(state) {
      Object.assign(state, initialState);
    },
    claimBonus(state) {
      const currentTime = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;

      if (!state.lastBonusTime || currentTime - state.lastBonusTime > twentyFourHours) {
        state.coins += 10;
        state.lastBonusTime = currentTime;
        state.bonusClaimed = true;
      } else {
        state.message = 'Bonus already claimed! Come back later.';
      }
    },
    resetBonus(state) {
      state.bonusClaimed = false;
    },
    startSpin(state) {
      state.isSpinning = true;
      state.totalSpins += 1;
    },
    placeBet(state) {
      if (state.selectedImage && state.betAmount > 0) {
        if (state.coins >= state.betAmount) {
          state.coins -= state.betAmount;
          state.message = `You placed a bet of ${state.betAmount} coins on ${state.selectedImage}`;
        } else {
          state.message = 'Not enough coins to place this bet!';
        }
      } else {
        state.message = 'Please select an image and set a valid bet amount.';
      }
    },
    showWinner(state, action) {
      state.winner = action.payload;
      state.showPopup = true;
    },
    closePopup(state) {
      state.showPopup = false;
      state.winner = null;
    },
    resetStreak(state) {
      state.spinStreak = 0;
      state.multiplier = 1;
    },
  },
});

export const {
  setSelectedImage,
  setBetAmount,
  incrementSpins,
  adjustCoins,
  adjustCash,
  setSpinResult,
  toggleSpinning,
  setMessage,
  updateLastWin,
  resetGame,
  claimBonus,
  resetBonus,
  startSpin,
  placeBet,
  showWinner,
  closePopup,
  resetStreak,
} = gameSlice.actions;

export const selectImage = (state) => state.game.selectedImage; // Selector for selectedImage

export default gameSlice.reducer;

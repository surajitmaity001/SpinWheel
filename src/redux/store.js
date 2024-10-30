// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add logger for dev
});

import React, { createContext, useReducer } from 'react';

const initialState = {
  coins: 50,
  cash: 0,
  totalSpins: 0,
  winHistory: [],
};

export const SpinWheelContext = createContext(initialState);

const spinWheelReducer = (state, action) => {
  switch (action.type) {
    case 'SPEND_COINS':
      return {
        ...state,
        coins: state.coins - action.payload,
      };
    case 'ADD_COINS':
      return {
        ...state,
        coins: state.coins + action.payload,
      };
    case 'INCREMENT_SPINS':
      return {
        ...state,
        totalSpins: state.totalSpins + 1,
      };
    case 'ADD_WIN_HISTORY':
      return {
        ...state,
        winHistory: [...state.winHistory, action.payload],
      };
    case 'ADD_CASH':
      return {
        ...state,
        cash: state.cash + action.payload,
      };
    case 'REMOVE_CASH':
      return {
        ...state,
        cash: state.cash - action.payload,
      };
    default:
      return state;
  }
};

export const SpinWheelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(spinWheelReducer, initialState);

  return (
    <SpinWheelContext.Provider value={{ state, dispatch }}>
      {children}
    </SpinWheelContext.Provider>
  );
};

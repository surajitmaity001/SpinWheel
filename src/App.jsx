import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rewards from './Components/reward/Reward';
import Wallet from './Components/Wallet/Wallet';
import SpinWheel from './Components/SpinWheel/SpinWheel';
import More from './pages/More';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SpinPage from './pages/SpinPage';
import { SpinWheelProvider } from './Components/Context/SpinWheelContext';

const App = () => {
  return (
    <Provider store={store}>
    <SpinWheelProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/spin" element={<SpinPage />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
    </SpinWheelProvider>
    </Provider>
  );
};

export default App;

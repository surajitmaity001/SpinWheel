import React, { useState } from 'react';
import './Wallet.scss';
import { FaWallet, FaPlusCircle, FaMinusCircle, FaHistory, FaCoins, FaInfoCircle } from 'react-icons/fa';

const Wallet = () => {
  const [balance, setBalance] = useState({ cash: 51, coins: 0 });
  const [transactions, setTransactions] = useState([]);
  const [addAmount, setAddAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [accountDetails, setAccountDetails] = useState('');
  const [modal, setModal] = useState({ open: false, message: '' });

  const COINS_TO_RUPEES = 5000;

  const handleAddCash = (e) => {
    e.preventDefault();
    if (!addAmount || parseFloat(addAmount) <= 0) return;

    setBalance((prev) => ({ ...prev, cash: prev.cash + parseFloat(addAmount) }));
    setTransactions((prev) => [
      ...prev,
      { id: prev.length + 1, type: 'Added Cash', amount: parseFloat(addAmount), timestamp: new Date() }
    ]);
    setAddAmount('');
    setModal({ open: true, message: `₹${addAmount} added to your wallet.` });
  };

  const handleWithdrawCash = (e) => {
    e.preventDefault();
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0 || !accountDetails) return;

    setBalance((prev) => ({ ...prev, cash: prev.cash - parseFloat(withdrawAmount) }));
    setTransactions((prev) => [
      ...prev,
      { id: prev.length + 1, type: 'Withdrew Cash', amount: parseFloat(withdrawAmount), timestamp: new Date() }
    ]);
    setWithdrawAmount('');
    setAccountDetails('');
    setModal({ open: true, message: `₹${withdrawAmount} withdrawn from your wallet.` });
  };

  const handleConvertCoinsToCash = () => {
    const coinsToConvert = balance.coins;
    const cashEquivalent = (coinsToConvert / COINS_TO_RUPEES).toFixed(2);

    if (coinsToConvert > 0) {
      setBalance((prev) => ({
        cash: prev.cash + parseFloat(cashEquivalent),
        coins: 0
      }));
      setTransactions((prev) => [
        ...prev,
        { id: prev.length + 1, type: 'Converted Coins to Cash', amount: parseFloat(cashEquivalent), timestamp: new Date() }
      ]);
      setModal({ open: true, message: `Converted ${coinsToConvert} coins to ₹${cashEquivalent}` });
    } else {
      setModal({ open: true, message: "You have no coins to convert." });
    }
  };

  return (
    <div className="wallet">
      <h2><FaWallet /> My Wallet</h2>
      <div className="balance">
        <div className="balance-item">
          <FaCoins className="icon" />
          <p>Total Coins</p>
          <span>{balance.coins} 🪙</span>
        </div>
        <div className="balance-item">
          <FaPlusCircle className="icon" />
          <p>Total Cash</p>
          <span>₹{balance.cash.toFixed(2)}</span>
        </div>
      </div>

      <div className="actions">
        <button className="action-btn" onClick={() => setShowAddCashForm(true)}>
          <FaPlusCircle /> Add Cash
        </button>
        <button className="action-btn" onClick={() => setShowWithdrawForm(true)}>
          <FaMinusCircle /> Withdraw Cash
        </button>
        <button className="action-btn" onClick={handleConvertCoinsToCash}>
          Convert Coins to Cash
        </button>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="modal">
          <div className="modal-content">
            <p>{modal.message}</p>
            <button onClick={() => setModal({ open: false, message: '' })}>OK</button>
          </div>
        </div>
      )}

      <div className="forms">
        {/* Add Cash Form */}
        <form className="cash-form" onSubmit={handleAddCash}>
          <label>
            Enter amount to add
            <input
              type="number"
              placeholder="Amount in ₹"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add Cash</button>
        </form>

        {/* Withdraw Cash Form */}
        <form className="cash-form" onSubmit={handleWithdrawCash}>
          <label>
            Enter amount to withdraw
            <input
              type="number"
              placeholder="Amount in ₹"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              required
            />
          </label>
          <label>
            Account details (UPI/Bank)
            <input
              type="text"
              placeholder="Enter UPI ID or bank details"
              value={accountDetails}
              onChange={(e) => setAccountDetails(e.target.value)}
              required
            />
          </label>
          <button type="submit">Withdraw Cash</button>
        </form>
      </div>

      <div className="history">
        <h3><FaHistory /> Transaction History</h3>
        <ul>
          {transactions.map((txn) => (
            <li key={txn.id}>
              <FaInfoCircle /> {txn.type}: ₹{txn.amount} - {txn.timestamp.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wallet;

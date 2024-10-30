// src/components/ProfilePage.js
import React, { useState } from 'react';
import './ProfilePage.scss';

const ProfilePage = ({ onClose }) => {
  const [userInfo, setUserInfo] = useState({
    gameID: '12345',
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    totalSpin: 150,
    badges: ['Newbie', 'Spinner', 'Lucky'],
    totalCash: 200,
    totalPoints: 1000,
    recentActivities: [
      { id: 1, action: 'Won $10 on Spin the Wheel!', date: '2024-10-26' },
      { id: 2, action: 'Earned 100 points from referral.', date: '2024-10-25' },
      { id: 3, action: 'Spun the wheel 5 times today.', date: '2024-10-24' },
    ],
  });

  const [newPassword, setNewPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [referralCode, setReferralCode] = useState('REF12345');
  const [notifications, setNotifications] = useState([
    'Your password was changed successfully.',
    'You have a new message from support.',
  ]);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Logic to change the password would go here
    alert('Password changed successfully!');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setProfileImage(null);
  };

  return (
    <div className="profile-page">
       <button className="close-button" onClick={onClose}>✖</button> {/* Close button */}
      <h2>User Profile</h2>
      <div className="profile-header">
        <div className="profile-picture">
          {profileImage ? (
            <div className="image-container">
              <img src={profileImage} alt="Profile" />
              <button onClick={handleImageDelete} className="delete-button">❌</button>
            </div>
          ) : (
            <label className="upload-button">
              Upload Image
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </label>
          )}
        </div>
        <div className="user-details">
          <h3>{userInfo.username}</h3>
          <p>Game ID: {userInfo.gameID}</p>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <form onSubmit={handlePasswordChange}>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit" className="change-password-button">Change Password</button>
          </form>
        </div>
      </div>
      <div className="user-stats">
        <h3>User Stats</h3>
        <div className="stat-item">
          <span>Total Spins:</span>
          <span>{userInfo.totalSpin}</span>
        </div>
        <div className="stat-item">
          <span>Badges:</span>
          <span>{userInfo.badges.length}</span>
        </div>
        <div className="stat-item">
          <span>Total Cash:</span>
          <span>${userInfo.totalCash}</span>
        </div>
        <div className="stat-item">
          <span>Total Points:</span>
          <span>{userInfo.totalPoints}</span>
        </div>
      </div>
      <div className="achievements-section">
        <h3>Achievements</h3>
        <ul className="badge-list">
          {userInfo.badges.map((badge, index) => (
            <li key={index} className="badge-item">{badge}</li>
          ))}
        </ul>
      </div>
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul className="activity-list">
          {userInfo.recentActivities.map((activity) => (
            <li key={activity.id} className="activity-item">
              {activity.action} <span className="activity-date">({activity.date})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="wallet-section">
        <h3>My Wallet</h3>
        <p>Current Balance: ${userInfo.totalCash}</p>
        <button className="add-funds-button">Add Funds</button>
      </div>
      <div className="referral-section">
        <h3>Referral Program</h3>
        <p>Your Referral Code: <strong>{referralCode}</strong></p>
        <p>Invite friends and earn rewards!</p>
      </div>
      <div className="support-section">
        <h3>Help & Support</h3>
        <p>If you have any questions, please contact our support team.</p>
        <button className="contact-support-button">Contact Support</button>
      </div>
      <div className="notifications-section">
        <h3>Notifications</h3>
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">{notification}</li>
          ))}
        </ul>
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default ProfilePage;

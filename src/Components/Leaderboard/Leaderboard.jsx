import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // User icon for placeholder
import "./Leaderboard.scss";

const Leaderboard = () => {
  const [currentTab, setCurrentTab] = useState("weekly");

  const leaderboardData = {
    weekly: [
      { id: 1, name: "UserOne", cash: 1050, coins: 100, profileImage: "/path/to/image1.jpg" },
      { id: 2, name: "UserTwo", cash: 980, coins: 95 },
      { id: 3, name: "UserThree", cash: 900, coins: 90 },
      // Add the rest of your data
    ],
    monthly: [
      { id: 1, name: "UserFourteen", cash: 2500, coins: 300, profileImage: "/path/to/image14.jpg" },
      { id: 2, name: "UserFifteen", cash: 2300, coins: 280 },
      // Add the rest of your data
    ],
    allTime: [
      { id: 1, name: "UserTwentyFive", cash: 5500, coins: 500, profileImage: "/path/to/image25.jpg" },
      { id: 2, name: "UserTwentySix", cash: 5200, coins: 480 },
      // Add the rest of your data
    ],
  };

  const switchTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="leaderboard-overlay">
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <div className="leaderboard__buttons">
          <button onClick={() => switchTab("weekly")} className={currentTab === "weekly" ? "active" : ""}>
            Weekly
          </button>
          <button onClick={() => switchTab("monthly")} className={currentTab === "monthly" ? "active" : ""}>
            Monthly
          </button>
          <button onClick={() => switchTab("allTime")} className={currentTab === "allTime" ? "active" : ""}>
            All-Time
          </button>
        </div>

        <div className="leaderboard__list">
          {leaderboardData[currentTab].map((user) => (
            <div key={user.id} className="leaderboard__user">
              <div className="leaderboard__profile">
                {user.profileImage ? (
                  <img src={user.profileImage} alt={user.name} className="leaderboard__image" />
                ) : (
                  <FaUserCircle className="leaderboard__icon" />
                )}
                <span className="leaderboard__name">{user.name}</span>
              </div>
              <div className="leaderboard__stats">
                <span className="leaderboard__points">{user.cash} cash</span>
                <span className="leaderboard__coins">{user.coins} coins</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

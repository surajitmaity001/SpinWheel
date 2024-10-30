// src/components/RewardsPage/RewardsPage.jsx
import React from 'react';
import './RewardsPage.scss';
import { rewardsData } from './rewardsData';
import AchievementCard from './AchievementCard';
import BalanceCard from './BalanceCard';

const RewardsPage = () => {
    const unlockedRewards = rewardsData.filter((reward) => reward.unlocked);
    const lockedRewards = rewardsData.filter((reward) => !reward.unlocked);

    return (
        <div className="rewards-page">
            <h1>Your Rewards</h1>
            <BalanceCard />

            <section className="rewards-overview">
                <h2>Achievements & Milestones</h2>
                <div className="achievements-list">
                    {unlockedRewards.map((reward) => (
                        <AchievementCard key={reward.id} reward={reward} />
                    ))}
                    {lockedRewards.map((reward) => (
                        <AchievementCard key={reward.id} reward={reward} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RewardsPage;

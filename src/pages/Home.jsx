import React from 'react'
import Hero from '../Components/Hero/Hero'
import HowToPlay from '../Components/HowToPlay/HowToPlay'
import Leaderboard from '../Components/Leaderboard/Leaderboard'
import Reward from '../Components/reward/Reward'
import Wallet from '../Components/Wallet/Wallet'
import SpinWheel from '../Components/SpinWheel/SpinWheel'
import Header from '../Components/Header/Header'
import Navigation from '../Components/Header/Navigation'
import BettingSystem from '../Components/BettingSystem/BettingSystem'
import ProfilePage from './ProfilePage'
import Auth from '../Components/Auth/Auth'
import RewardsPage from '../Components/reward/RewardsPage'
const Home = () => {
  return (
    <div>

      <Header/>
      <Navigation/>
      <Auth/>
        <Hero />
        <Leaderboard/>
        <HowToPlay/>
        <Reward/>
        <Wallet/>
        <BettingSystem/>
        <SpinWheel/>
        <ProfilePage/>
        <RewardsPage />
    </div>
  )
}

export default Home
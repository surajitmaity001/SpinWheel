import React from 'react'
import './SpinPage.scss'
import SpinWheel from '../Components/SpinWheel/SpinWheel';
import BettingSystem from '../Components/BettingSystem/BettingSystem';
import DisplayBalance from '../Components/SpinWheel/DisplayBalance';
const SpinPage = () => {
    return (
        <>
            <div className="SpinPage">
                <DisplayBalance totalCoins={1000} totalCash={5000}/>
                <SpinWheel/>
                <BettingSystem/>
            </div>
        </>
    )
}

export default SpinPage;
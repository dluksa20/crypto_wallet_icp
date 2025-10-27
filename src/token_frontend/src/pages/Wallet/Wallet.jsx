import React from 'react'
import Header from '../../components/Header/Header'
import Faucet from '../../components/Faucet/Faucet'
import Balance from '../../components/Balance/Balance'
import './Wallet.css'

const Wallet = () => {
  return (
    <div className='wallet-container'>
        <Header />
        <Balance />
    </div>
  )
}

export default Wallet

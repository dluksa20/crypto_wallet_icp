import React from 'react'
import Header from '../../components/templates/Header/Header'
import Faucet from '../../components/templates/Faucet/Faucet'
import Balance from '../../components/templates/Balance/Balance'
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

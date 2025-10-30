import React from 'react'
import Header from '../../components/templates/HeaderTemplate/Header'
// import Faucet from '../../components/templates/Faucet/Faucet'
import Balance from '../../components/templates/BalanceTemaplate/Balance'
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

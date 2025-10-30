import React from 'react'
import Header from '../../components/templates/HeaderTemplate/Header'
import Faucet from '../../components/templates/FaucetTemplate/Faucet'
import './Claim.css'

const Claim = () => {
  return (
    <div className='claim-container'>
        <Header />
        <Faucet />
    </div>
  )
}

export default Claim

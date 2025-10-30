import React from 'react'
import Header from '../../components/templates/HeaderTemplate/Header'
import Transfer from '../../components/templates/TransferTemplate/Transfer'
import "./Send.css"

const Send = () => {
  return (
    <div className='send-container'>
      < Header />
      < Transfer />
    </div>
  )
}

export default Send
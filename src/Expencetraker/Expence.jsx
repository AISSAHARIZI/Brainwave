import React from 'react'
import Balance from './balance'
import IncExp from './IncExp'
import History from './History'
import Transaction from './Transaction'
import Context from './ExpContext'

function Expence() {
  return (
    <Context>
      <div className='w-[40%]  mx-auto'>
        <Balance/>
        <IncExp/>
        <History/>
        <Transaction/>
      </div>
    </Context>
  )
}

export default Expence
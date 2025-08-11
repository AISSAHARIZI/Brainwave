import React, { useContext } from 'react'
import { GlobalContext } from './ExpContext';

function Balance() {
  console.log();
  let {total}=useContext(GlobalContext)
  return (
    <div className='text-black'>
      <h2 className='text-center text-2xl'>Expence Tracker</h2>
      <div className='mt-5'>
        <p>YOUR BALANC</p>
        <h2 className='text-2xl'>${total }</h2>
      </div>
    </div>
  )
}

export default Balance
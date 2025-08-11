import React, { useContext } from 'react'
import { GlobalContext } from './ExpContext';

function Transaction() {
  let {setTrans,newTran,setAmount,newAmount,add}=useContext(GlobalContext)
  console.log(newTran);
  
  return (
    <div className='mt-10'>
      <h2>Add new transaction</h2>
      <div className='border-t-1 border-solid  border-t-gray-400 flex flex-col'>
        <span className='mt-6'>Text</span>
        <input onChange={(e)=>setTrans(e.target.value)} className='border-1 border-gray-400 border-solid h-10' placeholder="Enter text..." />
        <span className='mt-6'>Amount <br />(negative-expense-positive-income) </span>
        <input onChange={(e)=>setAmount(e.target.value)} value={newAmount}  className='border-1 border-gray-400 border-solid h-10' type="Enter amount..." />
        <button onClick={add} className='bg-violet-500 text-amber-50 w-full p-5 mt-4'>Add transaction</button>
      </div>
    </div>
  )
}

export default Transaction
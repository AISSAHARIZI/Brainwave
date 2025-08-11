
import { useContext } from 'react'
import { GlobalContext } from './ExpContext'

function IncExp() {
  let {Expence,Balance}=useContext(GlobalContext)
  return (
    <div className='flex text-center shadow-lg   gap-6 mt-5 items-center p-5 justify-center'>
      <div className='text-center'>
        <p className='font-bold'>BALANCE</p>
        <p className='text-green-700 text-xl'><span>$</span>{Balance}</p>
      </div>
      <div className='text-center'>
        <p className='font-bold'>EXPENCE</p>
        <p className='text-red-500 text-xl'><span>$</span>{Expence}</p>
        
      </div>
    </div>
  )
}

export default IncExp
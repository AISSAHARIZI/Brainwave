import React, { useContext } from 'react'
import { ContextUI } from './UIContext'

function HeadUI() {

  let {step}=useContext(ContextUI)


  return (
    <div className='flex items-start px-7  bg-teal-600  text-white '>
      <div className='h-[5rem] w-[65%] flex justify-between items-center'> 
        <i className="fa-solid fa-grip-lines text-3xl"></i>
        <p className=' text-3xl' >{
        step===1 ? 'Enter user Details ':step===2? 'Enter user Details 2':step===3? 'Your Information' :'Success'
      }</p>
      </div>
      
    </div>
  )
}

export default HeadUI
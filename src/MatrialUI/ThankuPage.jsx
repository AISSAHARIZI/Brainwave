import React, {  useContext } from 'react'
import { ContextUI } from './UIContext'

function ThankuPage() {
  let {form}=useContext(ContextUI)
  return (
    <div className={` text-center mt-6 space-y-7`}>
      <h1>Thank You {form.name} For Your Submission!</h1>
      <p className='text-xl'>You will get an email with further instruction</p>
    </div>
  )
}

export default ThankuPage
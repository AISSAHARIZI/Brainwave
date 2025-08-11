import React, { useContext } from 'react'
import { ContextUI } from './UIContext'

function Info() {
   let {form,setNextstep}=useContext(ContextUI)
  return (
    <div  className={` flex-col space-y-5  w-[50%] mt-7  mx-auto`}>
      <div>
        <p className=''><strong>First Name :</strong></p>
        <p className=''>{form.name}</p>
      </div>
      <div>
        <p className=''><strong>Last Name :</strong></p>
        <p className=''>{form.lastName}</p>
      </div>
      <div>
        <p className=''><strong>Email:</strong></p>
        <p className=''>{form.email}</p>
      </div>
      <div>
        <p className=''><strong>Oocupation :</strong></p>
        <p className=''>{form.occupation}</p>
      </div>
      <div>
        <p className=''><strong>City :</strong></p>
        <p className=''>{form.city}</p>
      </div>
      <div>
        <p className=''><strong>Bio :</strong></p>
        <p className=''>{form.bio}</p>
      </div>
    <div className='flex justify-center w-full '>
      <div className='flex  items-center justify-around w-full'>
        <button onClick={()=>{
          setNextstep(prev=> prev+1)
        }} className='bg-teal-600 mx-auto rounded-lg text-2xl text-white '>Confirm & Continuit</button>
        <button onClick={()=>{
          setNextstep(prev=> prev-1)
        }}  className='text-2xl text-teal-600 border-1 border-teal-600 rounded-lg'> Back </button>
      </div>
    </div>
    
    </div>
  )
}

export default Info
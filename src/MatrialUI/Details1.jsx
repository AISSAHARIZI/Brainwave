import React, { useContext } from 'react'
import { ContextUI } from './UIContext'



function Details1() {

  let {setNextstep,form, setForm}=useContext(ContextUI)

  return (
    <div className={`  flex-col space-y-5  w-[50%] mt-7  mx-auto`}>
      <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder='First Name' className=' p-4 border-b-1 border-gray-400 outline-none' type="text" />
      <input value={form.lastName} onChange={(e)=>setForm({...form,lastName:e.target.value})} placeholder='Last Name' className='  p-4 border-b-1 border-gray-400 outline-none' type="text" />
      <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Emailll' className='  p-4 border-b-1 border-gray-400 outline-none' type="text" />

      <button onClick={()=>{
        setNextstep(prev=> prev+1)
      }} className='bg-teal-600 w-[50%] mx-auto rounded-lg text-2xl text-white'>Confirme</button>
    </div>
  )
}

export default Details1
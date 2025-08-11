import React, { useContext } from 'react'
import { ContextUI } from './UIContext'

function Details2() {
   let {setNextstep,form, setForm}=useContext(ContextUI)
  return (
    <div className={` flex flex-col space-y-5  w-[50%] mt-7  mx-auto`}>
      <input value={form.occupation} onChange={(e)=>setForm({...form,occupation:e.target.value})} placeholder='occupation' className=' p-4 border-b-1 border-gray-400 outline-none' type="text" />
      <input value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})}placeholder='City' className='  p-4 border-b-1 border-gray-400 outline-none' type="text" />
      <input value={form.bio} onChange={(e)=>setForm({...form,bio:e.target.value})} placeholder='Bio' className='  p-4 border-b-1 border-gray-400 outline-none' type="text" />
      <div className='flex justify-around w-full '>
          <button onClick={()=>{
        setNextstep(prev=> prev+1)
        
      }} className='bg-teal-600   rounded-lg text-2xl text-white'>Confirme</button>
          <button onClick={()=>{
        setNextstep(prev=> prev-1)
        
      }}  className='text-2xl text-teal-600 border-1 border-teal-600 rounded-lg'>Back</button>
      </div>
    
    </div>
  )
}

export default Details2
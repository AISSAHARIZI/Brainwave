import React, { useContext } from 'react'
import { HBcontextservices } from './HbContext'

function Wpc() {

  let {setWidth,setHeight,countWpc,restWpc,collWpc,height }=useContext(HBcontextservices)

  return (
    <div className='mt-10  '>
      <div className='flex items-center gap-5 max-lg:flex-col'>
        <div className='flex gap-6 items-center text-xl'>
          <label  htmlFor="width">Largeur/العرض  (cm)</label>
          <input id='width' onChange={(e)=> setWidth(e.target.value)} type="text" className='border-1 border-gray-400 p-1 outline-none'/>
        </div>
        <div className='flex gap-6 items-center text-xl'>
          <label  htmlFor="height">Longueur/الطول  (cm) </label>
          <input id='height' onChange={(e)=>setHeight(e.target.value)} type="text" className='outline-none border-1 border-gray-400 p-1'/>
        </div>
       
      </div>
      <div className='text-center mt-15 text-2xl ml-6'>
        <p className='flex gap-1.5'>WPC : <p className='text-green-600'>{Math.round(height<146 ? (countWpc/2):countWpc)}  </p>pc</p>
        <p className='flex gap-1.5'>Le Rest : <span className={` ${restWpc<0? ' text-green-600 ':'text-red-600'}`}>{restWpc} cm </span></p>
        <p className='flex gap-1.5'>Coll Silicon : <span className='text-blue-600'>{height<220 ?Math.round(collWpc/2):collWpc}</span></p>
      </div>
    </div>
  )
}

export default Wpc
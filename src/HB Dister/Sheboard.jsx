import React, { useContext } from 'react'
import { HBcontextservices } from './HbContext'

function Sheboard() {

  let {setWidth,setHeight,countSHBRD,restSHBRD,collSHBRD,height,wpcRest }=useContext(HBcontextservices)

  let restWPChtml=<p> (  possibel  {height<146? Math.round(wpcRest/2):Math.round(wpcRest) } pc de wpc )</p>

  let wpcRestCollhtml=<p> + ( Coll wpc : {Math.round(wpcRest/2)} )</p>

  return (
    <div className='mt-10 '>
       <div className='flex items-center gap-5 max-lg:flex-col'>
        <div className='flex gap-6 items-center text-xl'>
          <label  htmlFor="width">Largeur/العرض (cm)</label>
          <input id='width' onChange={(e)=> setWidth(e.target.value)} type="text" className='border-1 border-gray-400 p-1 outline-none'/>
        </div>
        <div className='flex gap-6 items-center text-xl '>
          <label  htmlFor="height">Longueur/الطول (cm) </label>
          <input id='height' onChange={(e)=>setHeight(e.target.value)} type="text" className='outline-none border-1 border-gray-400 p-1'/>
        </div>
       
      </div>
      <div className='text-center mt-15 text-2xl ml-6 '>
        <p className='flex gap-1.5'>Sheboard : <p className='text-green-600'>{Math.round(height<141 ?(countSHBRD/2):countSHBRD)}  </p>plaque(s)</p>
        <p className='flex gap-1.5'>Le Rest : <span className={` ${restSHBRD<0? ' text-green-600 ':'text-red-600'}`}>{restSHBRD} cm </span>{restSHBRD>0 && restWPChtml } </p>
        <p className='flex gap-1.5'>Coll Silicon : <span className='text-blue-600'>{height<141 ? Math.round(collSHBRD/2): Math.round(collSHBRD)}</span>{restSHBRD>0 && wpcRestCollhtml}  </p>
      </div>
    </div>
  )
}

export default Sheboard
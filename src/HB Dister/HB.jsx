import React, { useContext } from 'react'
import  { HBcontextservices } from './HbContext'
import Wpc from './wpc'
import Sheboard from './Sheboard'
import Mulur from './Mulur'

function HB() {

  let {setPage,page,setWidth,setHeight}=useContext(HBcontextservices)
  console.log(page);
  
  return (
    < section className=''>
      <header className='flex text-white justify-between items-center px-20 bg-blue-400 '>
        <h1>search</h1>
        <p className='bg-amber-300/50 p-1 rounded-xl'>service</p>
      </header>
      
      <div className='m-20 max-lg:w-[97%] mx-auto '>
        <div className='border-1 border-gray-400 p-2 w-[9rem] text-2xl'>
          <select name="" id="" onClick={()=>{
            setWidth(0)
            setHeight(0)
          }} onChange={(e)=>setPage(e.target.value)} value={page} className='w-full outline-none'>
            <option value="select">select</option>
            <option value="wpc">wpc</option>
            <option value="sheboard" className='px-2'>Sheboard ou Faux marber</option>
            <option value="mulur">mulur</option>
          </select>
          
        </div>
        {page==='wpc'&&<Wpc/>}
        {page==='sheboard'&&<Sheboard/>}
        {page==='mulur'&&<Mulur/>}
      </div>
      </section>
  )
}

export default HB
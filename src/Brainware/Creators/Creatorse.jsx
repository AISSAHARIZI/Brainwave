import React from 'react'
import { brainwaveServices } from '../constants'
import {  check, loading, service1 } from '../assets/assets'

import { Gradient } from '../design/design/Services'


function Creatorse() {
  return (
   <section className='flex flex-col w-[90%] mx-auto space-y-[5rem] '>
    <div className='text-center'>
        <h1>Genarative AI made for creators</h1>
        <p className='text-xl text-gray-500'>Brainwave unlocks the potencial of Ai-powred applications</p>
      </div>
    <div className='relative flex flex-col'>
      <div className='flex items-center justify-around  border-1 border-gray-800 border-solid rounded-3xl  '>
        <div className='w-[57rem] xl:relative max-xl:w-full  '>
          <img src={service1} className=' bottom-0 top-0  '  alt="" />
          <div className='text-center absolute bottom-[2rem] -right-[4rem] max-xl:bottom-3 flex items-center gap-5 bg-black rounded-full w-[70%] h-[3.5rem] z-10 max-xl:hidden'>
            <img className='object-cover' src={loading} width={29} alt="" />
            <p className='text-xl ' >AI is generating!</p>
          </div>
          
        </div>
        
        <div className='flex xl:flex-col w-[30%] max-xl:w-[100%]  space-y-[1.3rem] z-10 max-xl:text-[0.5rem] justify-around items-center max-xl:mr-10'>
            <div className='xl:space-y-9 max-xl:mr-9 '>
              <h1 className=' max-xl:text-sm '>Smartest AI</h1>
              <p className='text-gray-400 text-2xl max-xl:text-sm'>Brainwave unlocks the potencial <br /> of Ai-powred applications</p>
            </div>  
            <div className='xl:mt-6 xl:mr-12'>
              {brainwaveServices.map(braine=>
              <div className=' flex gap-5  space-y-[1.5rem] border-t-1 pt-3 border-t-neutral-800 border-solid'>
                <img src={check} width={30}  alt="" />
                <p className='font-extralight text-2xl max-xl:text-sm'>{braine}</p>
              </div>
              )}
            </div>
        </div>
      </div>
      <Gradient/>
    </div>
    
   </section>
  )
}

export default Creatorse
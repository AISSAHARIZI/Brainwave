import React, { useState } from 'react'
import { gradient, service2, service3 } from '../assets/assets'
import { brainwaveServicesIcons } from '../constants'
import { Gradient, PhotoChatMessage, VideoChatMessage } from '../design/design/Services'

function VdphGen() {
  let [Select,isSelect]=useState(false)
  function swetch(){
    isSelect(!Select)
  }
  return (
    <section className='flex border-1 gap-5 border-gray-800 border-solid rounded-3xl  overflow-hidden p-5 mb-[8rem] mt-[8rem] w-[90%] mx-auto max-xl:flex-col'>
      <div className='relative w-[50%] max-xl:w-full '>
        <div className='object-cover h-full w-full border-1 border-gray-800 border-solid rounded-3xl '>
          <img src={service2} className='object-cover h-full w-full' alt="" />
          <div className="absolute -top-[35rem] -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
        </div>
        <PhotoChatMessage />
        <div className='absolute bottom-[9rem] left-[5rem] max-xl:bottom-6 '>
          <h1>Photo editing</h1>
          <p className='text-xl text-gray-300'>Automaticly enhance your photos using our AI apps photo <br /> editing featur. Try it Now!</p>
        </div>
      </div>
      
      <div className='w-[50%] max-xl:w-full flex flex-col p-5 items-center space-y-[3rem]   mr-[6rem]  h-full '>

          <div className='mt-20'>
            <h1 className='mb-[2rem]'>Video Generation</h1>
            <p className='text-gray-300 text-xl'>The worlds moste powerfull AI photo and video art generation <br />engine. what will you create?</p>
          </div>
          <div className='flex  items-center justify-between w-[70%] max-xl:w-[90%] xl:ml-10  '>
            {brainwaveServicesIcons.map((icon,index)=>
            <div className={`p-1 ${index===2&& 'bg-gradient-to-r via-green-500 from-red-500 to-violet-950 rounded-3xl'} `}>
              <div onClick={swetch} className={` p-4  ${index===2&&'bg-slate-950'} bg-slate-800 rounded-3xl `}>
                <img src={icon} className='text-6xl ' alt="" />
              </div>
            </div>
            )}
        </div>
        <div className='relative bg-amber-100 rounded-3xl'>
          <div className='relative'>
          
            <img src={service3} className=' bottom-[1.5rem] h-[77%]'  alt="" />
            <div className='absolute w-full bottom-3  left-5 flex items-center gap-5  '>
              <div>
                <img className='w-[1.8rem]' src="/src/Brainware/assets/assets/play.svg" width={30} alt="" />
              </div>
              <div className='h-1 w-[80%] bg-gradient-to-r from-violet-700 via-violet-600 to-amber-50'></div>
            </div>
          </div>
         
         
          <VideoChatMessage/>
        </div>
      
      </div>
      
    </section>
  )
}

export default VdphGen
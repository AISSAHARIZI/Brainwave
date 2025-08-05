import React from 'react'
import { pricing } from './constants'
import { check } from './assets/assets'

function Pricing() {
  return (
  <section className='w-[90%] mx-auto flex flex-col justify-center'>
    <div className='relative xl:flex flex-col items-center text-center mb-[5rem] hidden  '>
      <img className=' w-[80%] mx-auto' src='/src/Brainware/assets/assets/pricing/stars.svg' alt="" />
      <img className='absolute flex justify-center top-15 right-1/3.5 w-[22rem] ' src='/src/Brainware/assets/assets/4-small.png' alt="" />
      <div className='space-y-6 -mt-6'>
         <p className=' bg-gradient-to-r from-green-500 via-violet-500 to-pink-500 bg-clip-text text-transparent'>[ GET STARTED WITH BRAINWAVE ]</p>
         <h1 className='text-4xl '>Pay once, use forever</h1>
      </div>
    </div>
    

    <div className='grid max-md:grid-cols-1 lg:grid-cols-2 xl:flex items-center gap-6 mb-[5rem]  '>
      {pricing.map(card=>
        <div className={`flex flex-col border-1 border-solid border-[#282338] p-10 ${card.price==='9.99'?'h-[52.5rem]':'h-[50rem]'}   rounded-[3rem]`}>
          <h2 className={` text-[2.8rem] ${card.color}`}>{card.title}</h2>
          <div className='h-[5rem]'>
            <p className='text-gray-500 text-2xl mt-5'>{card.description}</p>
          </div>
          
          <div className='flex gap-2 items-center mt-7 h-[8rem]'>
            <span className='text-[3rem] w-[2rem]'>{card.price==null?'':'$'}</span><span className='text-[7rem] font-bold '>{card.price==null?'':card.price}</span>
          </div>

            <button className={` w-full  mt-5 font-bold ${card.price===null?' text-red-800  ':'text-black '}`}>{card.price==null?'Contect US': 'Get Started'}</button>
          <div className='mt-[4rem]'>
            {card.features.map(feat=>
              <div className='flex items-start gap-7 border-solid border-[#282338] border-t-1 py-4'>
                <div className='w-[3rem]'>
                  <img className=' mt-2 ' src={check} width={29}   alt="" />
                </div>
                <p className='text-2xl'>{feat}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    <h2 className='text-center font-bold font-arial underline'>SEE THE FULL DETAILS</h2>
  </section>
  )
}

export default Pricing
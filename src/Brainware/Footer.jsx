import React from 'react'
import { brainwave } from './assets/assets'
import {  naviTot, socials } from './constants'

function Footer() {
  return (
    <section className=' w-[90%] mx-auto '>
      <div className='flex justify-between max-sm:flex-col items-center my-[4rem] border-t-[#282338] border-t-1 border-solid pt-6 px-3.5 w-full'>
        <div className='max-xl:mb-1.5'>
           <img src={brainwave} className='w-[14rem] max-lg:w-[12rem] max-md:w-[5rem] justify-around max-sm:w-[12rem]  ' alt="" />
        </div>
        <div className='flex max-md:mt-5 items-start gap-5 max-md:ml-8 max-md:grid grid-cols-3  md:w-[60%]'>
          {naviTot.map(nav=> <span className={`text-gray-400 text-[15px] uppercase max-lg:text-[14px] max-md:text-[15px] cursor-pointer  font-cod transition-colors  hover:text-neutral-50 ${nav.title==='Pricing'&& 'text-neutral-50'}  `} key={nav.id}>{nav.title}</span>)}
        </div>
      </div>
      <div className='flex items-center justify-between border-t-[#282338] border-t-1 border-solid px-3.5 pt-6  h-[6rem]'>
        <p className='text-2xl'>c 2025 U18</p>
        <div className='flex items-center  gap-7 '>
          {socials.map(scl=>
            <div className='bg-gray-900 rounded-full p-2 transition-colors hover:bg-amber-200 cursor-pointer'>
              <img src={scl.iconUrl} width={25} alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Footer
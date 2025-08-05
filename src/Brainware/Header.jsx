import React, { useState } from 'react'
import { navigation ,navSign} from './constants/index'
import { brainwave } from './assets/assets'
import { naviTot } from './constants/index'
function Header() {
  let [affich,setAfiche]=useState(false)
  function ToggleAfich(){
    setAfiche(prevafich=>!prevafich)
  }
  return ( 
  <section className={`  flex flex-col  max-sm:w-[100vw]  ${affich && 'max-sm:h-[100vh]'}`}>

  
    <div className=' flex justify-between h-[6rem] mx-4 items-center py-3 absolute top-0 left-0 right-0 px-5 border-b-[0.4px] border-solid border-gray-600  '>
      <div className='flex  '>
        <img src={brainwave} className='w-[14rem] max-lg:w-[12rem] max-md:w-[5rem] max-sm:w-[12rem]  ' alt="" />
        <img src='/my-react-app/src/assets/assets/background.jpg' className='w-[12rem] max-lg:w-[10rem] max-md:block md:hidden ' alt="" />
      </div>
      <div className='flex gap-30 max-sm:hidden max-md:gap-6 '>
        {navigation.map(nav=> <span className={`text-gray-400 text-[15px] uppercase max-lg:text-[14px] max-md:text-[10px] cursor-pointer hover:text-n-100 font-cod transition-colors  hover:text-neutral-50 ${nav.title==='Pricing'&& 'text-neutral-50'}  `} key={nav.id}>{nav.title}</span>)}
      </div>
        
      <div className='sm:hidden max-sm:block items-center  '>
        {affich?<i className="fa-solid fa-xmark text-amber-50 cursor-pointer text-3xl" onClick={ToggleAfich}></i> :<i className="fa-solid fa-grip-lines text-amber-50 cursor-pointer text-3xl " onClick={ToggleAfich}></i>}
      </div>
      <div className='flex  max-md:gap-6 gap-12 ml-4 max-sm:hidden items-center'>
        {navSign.map(nav=> <span className={`font-[Audiowide] uppercase text-gray-400 cursor-pointer text-[15px] max-lg:text-[14px] max-md:text-[7px]   hover:text-n-100 font-cod transition-colors  hover:text-neutral-50 ${nav.title==='Sign in'&& 'bg-amber-50 text-black border-amber-50 border-solid px-5 py-2 rounded-full hover:text-amber-50 hover:bg-black'} `} key={nav.id}>{nav.title}</span>)}
      </div>
    </div>
    {affich?
    <div className=" h-[100vh] sm:hidden max-sm:flex flex-col space-y-6 items-center text-center pt-50 ">
      {naviTot.map(nav=> <a className={`text-white text-3xl cursor-pointer hover:text-n-100 transition-colors  hover:text-neutral-50 ${nav.title==='Sign in'&& ' text-black border-amber-50 border-solid px-5 py-3 rounded-full hover:text-amber-50 hover:bg-transparent items-center text-center'} `} key={nav.id}>{nav.title}</a>)}
    </div>
    
    :
    <div className='h-[0vh]'>
  </div>}
</section>
  )
}

export default Header

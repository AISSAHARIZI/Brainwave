import React from 'react'
import { benefits } from '../constants'
import ClipPath from '../assets/assets/svg/ClipPath';
import { GradientLight } from '../design/design/Benefits';


function Cards() {
  console.log(benefits[0].backgroundUrl);
  
  return (
  <div className={`grid grid-cols-3 gap-[4rem] max-sm:grid-cols-1 mb-6 max-lg:grid-cols-2 `}>

    {benefits.map(ben=>
      <div className={` overflow-hidden relative hover:text-white  border-1 border-gray-800/50 border-solid hover:border-white/20 backdrop-blur-2xl h-[22rem]  p-5 rounded-lg flex flex-col justify-between  `}>
        <div className='z-10'>
          <p className='text-3xl mb-2'>{ben.title}</p>
          <p className='text-lg text-gray-500 w-[60%] max-xl:w-[95%]'>{ben.text}</p>
        </div>
      
        <div className='flex justify-between  items-center px-4 z-10'>
          <img src={ben.iconUrl} alt="" />
          <p className='text-xl cursor-pointer'>Learn more <i className="fa-solid fa-angle-right ml-5"></i> </p>
        </div>
        {ben.light && <GradientLight/>}
        <div className='absolute w-full h-full opacity-0 z-0 right-0 hover:opacity-20 transition-opacity -top-19  '>
          <img src={ben.imageUrl} className='object-cover' alt="" /> 
        </div>
     </div>
     
    )}
  <ClipPath/>
  </div>
   
  )
}

export default Cards
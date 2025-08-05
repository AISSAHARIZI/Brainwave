import React from 'react'
import { ScrollParallax } from 'react-just-parallax'
import { heroIcons } from '../constants'
import { BackgroundCircles ,Gradient,BottomLine} from '../design/design/Hero'
import Divclient from './div-client'
import Companylogos from './Companylogos'

function Main1() {
  return (
    <div className=''>
      
      <div className=' overflow-hidden text-amber-50 text-center mx-auto  items-center mt-[120px] w-[90%]  relative '>
          <div className='absolute xl:left-[24.5rem]
          md:-top-35
          md:w-[66rem] items-center  
          max-sm:w-[30rem]
          max-sm:left-6
          max-sm:top-63'>
            <img   src="/src/Brainware/assets/assets/hero/hero-background.jpg" alt="" />
        </div>
        
        
    
      <div className=' relative space-y-8 mb-6'>
        <h1 className='z-1 max-sm:w-[500px] max-sm:text-3xl '>Explore the posibilities <br /> of Ai Chatting With <span className='relative bg-no-repeat inline-block'> Brainwave<img src="src/assets/assets/hero/curve.png" className=' absolute mt-2' alt="" /></span></h1>
      <p className='text-gray-500  text-[20px] max-sm:text-[18px] '>Unleach the power of Ai withing Brainwave.Upgrade your <br /> Productivity with Brainwave,the open Ai chat app </p>
      <button className='text-black '>GET STARTED</button>
      
      </div>
    <div className='relative'>
      <div className="overflow-hidden border-solid border-3 border-[#561b71] relative rounded-[15px] w-[20rem] md:h-[32rem]   z-0
      md:w-[52rem] mx-auto flex flex-col md:mt-25">

  {/* الشريط العلوي */}
        <div className="absolute top-0 z-20 h-[1.8rem] w-full bg-gray-600 rounded-t-lg"></div>

        {/* الصورة */}
        <div className="relative z-10 w-full h-full md:object-top">
          <img
            className="w-full h-full object-cover max-sm:-translate-y-16"
            src="/src/Brainware/assets/assets/hero/robot.jpg"
            alt="Robot"
          />
        </div>
    {/* loading Ai*/}
        <div className='hidden lg:flex absolute bottom-3 right-[20%] bg-blend-color-burn z-10 items-center space-x-6 bg-black/70 px-5 h-[3rem]  rounded-full w-[35rem] '>
          <img src="/src/Brainware/assets/assets/loading.png" className='h-6 w-6' alt="" />
          <p className='text-[17px]'> Ai is generating |</p>
        </div>
      
      </div>
      
      <ScrollParallax>
        <ul className="hidden md:flex   absolute bottom-[5rem] sm:left-[1rem]  max-sm:p-3 xl:left-[19rem]   backdrop-blur-lg border-blue-200/30 border-1 border-solid  bg-gray-800/50 rounded-lg  ">
          {heroIcons.map((icon, index) => (
            <li className='cursor-pointer p-5' key={index}>
              <img src={icon} alt="" />
            </li>
          ))}
        </ul>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned>
        <Divclient/>
      </ScrollParallax>
      <BackgroundCircles/>
      </div>
    </div>
    <Companylogos/>
    <BottomLine/>
  </div>
  )
}

export default Main1
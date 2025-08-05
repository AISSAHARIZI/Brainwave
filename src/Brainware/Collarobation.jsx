import React from 'react'
import { collabApps, collabContent } from './constants'
import {  brainwaveSymbol, check } from './assets/assets'
import { LeftCurve, RightCurve } from './design/design/Collaboration'

function Collarobation() {
  return (
   <section className='w-[90%] mx-auto mb-[5rem] flex justify-between items-center max-lg:flex-col max-lg:space-y-[3rem]'>
      <div className='w-[20%] max-xl:w-[80%]'>
        <h1 className='mb-[5rem]'>Ai chat app for seamless collarobation </h1>
        <div className='my-[6rem] space-y-8'>
          {collabContent.map(coll=> 
            <div className=''>
              <div className='flex gap-5 items-center'>
                <img src={check} alt="" />
                <p className=' text-2xl'>{coll.title}</p>
              </div>
              {coll.text && <p className='my-3 text-[1.3rem] text-gray-500'>{coll.text}</p>}
            </div>
          )}
        </div>
       <button className='text-black font-[Audiowide]'>TRY IT NOW</button>
      </div>
      <div className='-translate-0.5 max-lg:mr-0 flex flex-col space-y-[5rem] items-center'>
        <p className=' text-xl text-gray-500 font-semibold max-sm:m-0'>With smart automation and top-notch  <br />security,its the best solution for teams <br /> looking for work smarter </p>
        <div className='flex items-center justify-center relative border-solid border-[0.2px] border-gray-800 w-[35rem] rounded-full aspect-square scale-75 '>
          <div className='flex items-center justify-center border-solid border-[0.2px]  border-gray-800 w-[20rem] rounded-full aspect-square m-auto  '>
            <div className='p-1.5 bg-gradient-to-l from-blue-900 via-green-400 to-violet-500 rounded-full'>
              <div className='flex items-center justify-center border-solid border-[0.2px] bg-black border-gray-700   rounded-full aspect-square m-auto p-[1rem]  ' >
                <img src={brainwaveSymbol} width={70} height={180} alt="" />
              </div>
            </div>
            </div>
          <ul>
            {collabApps.map((coll,index)=>{
              let angle=index*(360/ collabApps.length)
              return(
                  <li className={`absolute h-1/2  left-1/2 top-1/2  rotate-${angle} -ml-[2rem] -mt-[2rem] origin-center  `}
                  style={{
                    transform: `rotate(${angle}deg) translateY(-100%) translateX(-2.8rem) rotate(-${angle}deg)`, // 
                    transformOrigin: "center",
                  }}>
                <div className='w-full h-full object-cover'>
                  <img src={coll.icon} className='rounded-xl border-solid border-[0.2px] p-[0.5rem] bg-conic-gradient border-gray-650' alt="" width={60} />
                </div>
              </li>
              )
            }
            )}
            </ul>
            <RightCurve/>
            <LeftCurve/>

        </div>
      </div>
   </section>
  )
}

export default Collarobation
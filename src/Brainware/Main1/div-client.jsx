import React from 'react'

function Divclient() {
  return (
    <div className='hidden md:flex absolute z-20 top-[12rem] right-[19rem] rounded-lg  w-[18rem]  items-center space-x-3.5 py-3 px-6border-blue-200/30 border-1 border-solid px-3 backdrop-blur-lg  bg-gray-800/50'>
          <div className='h-14 w-14 '>
            <img className='rounded-lg' src="/src/Brainware/assets/assets/notification/image-1.png" alt="" />
          </div>
          <div className='flex flex-col w-[11rem]'>
            <p className='text-[17px] mr-14 font-semibold'>Code generate</p>
            <div className='flex justify-between items-center'>
              <div className='flex '>
              <img className='h-4 w-4 rounded-full' src="/src/Brainware/assets/assets/notification/image-2.png" alt="" />
              <img className='h-4 w-4 rounded-full' src="/src/Brainware/assets/assets/notification/image-3.png" alt="" />
              <img className='h-4 w-4 rounded-full' src="/src/Brainware/assets/assets/notification/image-4.png" alt="" />
              </div>
              <p className='text-gray-400'>1m ago</p>
            </div>
          </div>
        </div>
  )
}

export default Divclient
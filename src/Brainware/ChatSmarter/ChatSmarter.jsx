import React from 'react'
import Cards from './cards'

function ChatSmarter() {
  return (
    <div className='flex flex-col items-center space-y-20 mt-[10rem] w-[90%] mx-auto '>
      <h1 className='text-center'>Chat Smarter ,Not Harder <br /> with Brainwave</h1>
      <Cards/>
    </div>
  )
}

export default ChatSmarter
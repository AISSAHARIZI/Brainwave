import React, { useContext } from 'react'
import List from './List'
import Unformation from './Unformation'
import { lyriceContx } from './LyricContext'


function Lyrice() {

  let {page}=useContext(lyriceContx)

  return (
    
    <section >
        <header className='bg-gray-800 text-amber-50 font-bold text-center h-[4rem] flex items-center justify-center text-xl'>
          LyriceFinder
        </header>
        <div className='w-[60%] mx-auto mt-24 '>

        {page===1 &&<List/>}
        </div>
        
        {page===2 &&<Unformation/>}

    </section>
    
  )
}

export default Lyrice
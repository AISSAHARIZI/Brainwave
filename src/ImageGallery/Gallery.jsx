import React, {  useContext } from 'react'
import ImagesGrid from './imagesGrid'
import  { contexoo } from './ContextPixa';

function Gallery() {
  let {setText,text,setTerm}=useContext(contexoo)
  return (
    
    <section className='w-[80%] mx-auto'>
      <div className='flex justify-center my-9'>
        <form onSubmit={(e)=>{
          e.preventDefault();
          setTerm(text);
          console.log(text);
          
          }  } action="">
          <div className='relative border-1 p-4 border-solid border-gray-400 w-[27rem] rounded-lg '>
            <input onChange={(e)=>setText(e.target.value)} className='outline-none   ' type="text" placeholder='Search image Term...' />
            <button type='submit' value={text}   className=' absolute text-amber-50 font-bold right-1.5 top-1.5 outline-none  px-3 py-1.4 bg-teal-600 rounded-lg'>Search</button>
          </div>
        </form>
      </div>
      <div>
        <ImagesGrid />
      </div>
    </section>

   
  )
}

export default Gallery
import React, { useContext, useEffect } from 'react'
import { MatirialUIContext } from './MatirialContext'

function ImagesPixa() {

  let {setImage,images,form,setZoom,setForm}=useContext(MatirialUIContext)

  useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=45813934-99820dab81a2de54e8ab8a30d&q=${form.text}&image_type=photo&per_page=${form.amount}&safesearch=true`)
    .then(res=> res.json())
    .then(data=>setImage(data.hits) )
  },[form.text,form.amount])

  return (
    <div className='grid grid-cols-3 gap-1  '>
      {images.map((galry,index)=>
        <div key={index} className='relative  space-y-3  overflow-hidden '>
          <div className=' h-[11rem]'>
            <img className='object-cover h-full  w-full' src={galry.largeImageURL} alt="" />
          </div>
            <div className='absolute bottom-0 w-full bg-gray-900/50 text-white p-3 '>
              <p ><strong>by{galry.user}</strong></p>
              <p> {galry.tags.split(",").slice(0,3).map(tag=> <span className='  rounded-2xl'> #{tag}</span>)}</p>
            </div>
            <i onClick={()=>{
              setZoom(true)
              setForm({...form,currentindex:index})
              }} className="fa-solid fa-magnifying-glass-plus text-white text-xl absolute right-6 bottom-8 cursor-pointer "></i>
        </div>
      )}

      <div className='flex'>
        <div className='bg-yellow-400 h-[5rem] w-[5rem]'></div>
        <div className='bg-blue-500 h-[5rem] w-[5rem]'></div>
      </div>
    </div>
  )
}

export default ImagesPixa
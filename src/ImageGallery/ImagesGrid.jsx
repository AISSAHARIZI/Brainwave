
import React, { useContext, useEffect, useState } from 'react'
import { contexoo } from './ContextPixa'

function ImagesGrid() {
  let [images,setImages]=useState([])
  let [isLoading,setLoading]=useState(true)
  let {term}=useContext(contexoo)

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=45813934-99820dab81a2de54e8ab8a30d&q=${term}&image_type=photo&pretty=true`)
    .then(res=> res.json())
    .then(data=> setImages(data.hits));
      setLoading(false)

  },[term])


  return (
    <div >
      {isLoading?<h1 className='text-center grid grid-cols-3 gap-7 '>Loading...</h1>:<div className='grid grid-cols-3 gap-7'>
        {images.map((galry,index)=> 
         <div key={index} className='space-y-7 shadow-2xl p-4 '>
          
            <img src={galry.webformatURL} alt="" />
            <p className='text-violet-500 text-3xl'>Photo by {galry.user} </p>
            <p><span className='font-bold'>views :</span>{galry.views}</p>
            <p><span className='font-bold'>DaownLoads :</span>{galry.downloads}</p>
            <p><span className='font-bold'>Likes :</span>{galry.likes}</p>
            <div className='flex justify-around gap-5 w-[80%]'>
              {galry.tags.split(",").slice(0,3).map((tag,index)=>  <span key={index} className='bg-gray-300 rounded-2xl px-2 py-0.5'>#{tag}</span>)}
          </div>
       </div>
      )}
      </div>}
      
     
    </div>
  )
}

export default ImagesGrid
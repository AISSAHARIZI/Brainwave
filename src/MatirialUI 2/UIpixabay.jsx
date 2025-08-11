import React, { useContext } from 'react'
import Headpixa from './headpixa'
import ImagesPixa from './imagesPixa'
import { MatirialUIContext } from './MatirialContext'


function UIpixabay() {

  let {form,setForm,isZoom,images,setZoom}=useContext(MatirialUIContext)
  


  return (
    <section className={`relative`}>
     {isZoom ? <div onClick={()=>setZoom(false)} className='absolute w-[100%] h-[100%] bg-gray-900/80 z-8'></div>:''}
      <Headpixa/>
      {isZoom &&
        images.map((galry,i)=> i===form.currentindex ?
          <div  className=' absolute z-10 left-1/4 top-1/7 block w-[40%] bg-amber-50 p-7 '>
            <img  src={galry.largeImageURL} className='relative' alt=''></img>
            <span onClick={()=>setZoom(false)} className='absolute -bottom-1  right-3 text-xl text-blue-500 cursor-pointer hover:underline ' >close</span>
          </div>:null
        )
      }
      <div className=' block'>
        <input type="text" value={form.text} placeholder='Search' onChange={(e)=>setForm({...form,text:e.target.value})}  className='px-5 h-[3rem] w-full outline-0 border-b-1 border-b-gray-400  focus:border-b-blue-500 transition-colors '/>
        <div className='mt-6 shadow-xl p-6'>
          <select name="" id="" onChange={(e)=>setForm({...form,amount:e.target.value})}>
            <option value="select">Amount...</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <ImagesPixa/>
    </section>
  )
}

export default UIpixabay
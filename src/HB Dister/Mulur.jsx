import React from 'react'

import { HBcontextservices } from './HbContext'
import { useState } from 'react'

function Mulur() {


    let [ListMulur,setList]=useState([])
    let [widthMulur,setWidthmulur]=useState(0)
    let [heightMulur,setheightMulur]=useState(0)
    let [cader,setCader]=useState(0)
    
    let mulurCountwidth= (290/2)>=widthMulur ? 1 : 2
    let mulurCountheigth= (290/2)>=heightMulur ? 1 : 2
    let MulurCountTot= mulurCountheigth + mulurCountwidth
    let total= cader* MulurCountTot

    

    let restmulurWidth=(290-widthMulur)>=145 ? (290-widthMulur*2) : (290-widthMulur)
    let restmulurHeigth=(290-heightMulur) >=145 ?(290-heightMulur*2) :(290-heightMulur)
    
    
    let collMulur=((widthMulur*2 + heightMulur*2)/1200)*cader
    
    let TotalMulur=ListMulur.reduce((acc,mulur)=> acc+mulur.mulurcount ,0 )

    let TotalMulurSilicon=ListMulur.reduce((acc,mulur)=> acc+(mulur.coll<0.5 ? 1 :Math.round(mulur.coll)),0 )


    function Add(){
      setList(prev=>
        [...prev,{mulurcount:total,restW:restmulurWidth,restH:restmulurHeigth,countCader:cader,coll:collMulur,h:heightMulur,w:widthMulur}]
      )
    }

    function delet(index){
      setList(prev=>{
        let newList= prev.filter((_,i)=> i!==index)
        return newList
      })
    }
   return (
     <div className='mt-10 '>
      

       <div className='flex items-center flex-col gap-5 space-y-9'>
          <div className='flex flex-col items-center gap-5'>
            <div className='flex gap-6 text-xl'>
              <label htmlFor="width">Largeur du cadre/ <br /> عرض الاطار (cm)</label>
              <input id='width' value={widthMulur} onChange={(e)=> setWidthmulur(Number(e.target.value))} type="text" className='border-1 h-[3rem] border-gray-400 p-1 outline-none'/>
            </div>
            <div className='flex gap-6 text-xl'>
              <label htmlFor="height">Longueur du cadre/ <br /> طول الاطار   (cm)</label>
              <input id='height' value={heightMulur} onChange={(e)=>setheightMulur(Number(e.target.value))} type="text" className='outline-none h-[3rem] border-1 border-gray-400 p-1'/>
            </div>
            
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='flex gap-4 items-center'>
              <input onChange={(e)=>setCader(Number(e.target.value))} type="radio" name='count' value={1} id='1' className='w-5 h-5' />
              <label htmlFor="1" >1 cader</label>
            </div>
            <div className='flex gap-4 items-center' >
              <input type="radio" onChange={(e)=>setCader(Number(e.target.value))} name='count' value={2} id='2' className='w-5 h-5' />
              <label htmlFor="2" >2 cader</label>
            </div>
            <div className='flex gap-4 items-center'>
              <input type="radio" onChange={(e)=>setCader(Number(e.target.value))} name='count' value={3} id='3' className='w-5 h-5' />
              <label htmlFor="3" >3 cader</label>
            </div>
          </div>
          <button  onClick={Add} className='bg-orange-400 rounded-xl'>+ ajout un cader</button>
       </div>
        {ListMulur.map((mulur,index)=>{
          let LeRestHtml=<span className='text-red-600'> { mulur.countCader} chut de {mulur.restH>widthMulur ?mulur.restH-widthMulur: mulur.restW} et {mulur.countCader} chut de {mulur.restW > heightMulur ? mulur.restW-heightMulur :mulur.restH}  (cm) </span>
          let LeRestHtml2=<span className='text-red-600'>{mulur.countCader+mulur.countCader} chut de {mulur.restH> widthMulur ? mulur.restH-widthMulur : mulur.restW}  (cm) </span>
          return (

            <div key={index} className='text-center mt-15 text-2xl   space-y-3 '>
              <p className='border-b-gray-400 mx-auto w-[80%] border-b-1 pb-3'> {mulur.countCader} cader de {(mulur.h/100).toFixed(2)} m x {(mulur.w/100).toFixed(2)} m  </p>
              <p className='flex gap-1.5'>Mulur : {mulur.restH >=widthMulur || mulur.restW >=heightMulur ? mulur.mulurcount-1 :mulur.mulurcount}<p className='text-green-600'>  </p>pc</p>
              <p className='flex gap-1.5 text-xl'> </p>
              <div className='flex items-center gap-20 border-b-1 border-b-gray-400 pb-4'>
                <p className='flex gap-1.5 '>Coll Silicon : <p className='text-blue-500'>{mulur.coll<0.5 ? 1 :Math.round(mulur.coll)} </p>  <span className='text-blue-600'></span> pc </p>
                <span onClick={()=>delet(index)} className='text-red-600 underline cursor-pointer'>Suprime</span>
              </div>
          </div>
          )
        }

          
        )}
        {ListMulur.length>0 ?
        <div>
            <div className='text-center mt-4'>
              <p className='text-2xl'>Total :</p>
            </div>
            <div className='my-5 space-y-3 border-1 border-gray-400 p-4 '>
              <p className='text-2xl'>Nombre total de moulures : <span className='text-gray-800'>{TotalMulur}</span> pc</p>
              <p className='text-2xl border-t-1 border-t-gray-400 pt-4'>Nombre total de silicon coll :  <span> {TotalMulurSilicon}</span> pc</p>
            </div>
          </div> : null}
     </div>
  )
}

export default Mulur
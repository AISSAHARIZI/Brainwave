import React, { createContext, useState } from 'react'


export let HBcontextservices=createContext()


function HbContext({children}) {
  let [page,setPage]=useState('')
  let [width,setWidth]=useState(Number)
  let [height,setHeight]=useState(Number)
//  WPC
  let countWpc= width/16 
  let restWpc=width-(Math.round(countWpc)*16)
  let collWpc=(Math.round(countWpc/2))
  
  
// Sheboard 

  let countSHBRD= width/120
  let restSHBRD=width-(Math.round(countSHBRD)*120)
  let wpcRest=Math.round(restSHBRD/16)
  let collSHBRD=(Math.round(countSHBRD*2))
  
// Mulur 
 
  

  return (
    <HBcontextservices.Provider value={{width,setWidth,countWpc,height,setHeight,restWpc,collWpc,restSHBRD,collSHBRD,countSHBRD,setPage,page,wpcRest}}>
      {children}
    </HBcontextservices.Provider>
  )
}

export default HbContext
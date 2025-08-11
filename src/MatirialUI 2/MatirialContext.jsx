
import React, { createContext, useState } from 'react'

export let MatirialUIContext=createContext()

function MatirialContext({children}) {

    let [images,setImage]=useState([])
    let [isZoom,setZoom]=useState(false)
    let [form,setForm]=useState({

      text:'',
      currentindex:'',
      amount:20,

    })

    


  return (
    <MatirialUIContext.Provider value={ {images, setImage, form, setForm,isZoom,setZoom,}} >
      {children}
    </MatirialUIContext.Provider>
  )
}

export default MatirialContext
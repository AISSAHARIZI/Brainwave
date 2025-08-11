import React, {  createContext, useState } from 'react'

export let ContextUI=createContext()

function UIContext({children}) {


  let[step,setNextstep]=useState(1)

  let [form,setForm]=useState({
    name:'',
    lastName:'',
    occupation:'',
    email:'',
    city:'',
    bio:'',
  })
 
  return (
    <ContextUI.Provider value={{step,setNextstep, form,setForm}}>
      {children}
    </ContextUI.Provider>
  )
}

export default UIContext
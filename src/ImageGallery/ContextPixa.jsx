import React, {  createContext, useState } from 'react'

export  let contexoo=createContext()

function ContextPixa({children}) {


  let [term,setTerm]=useState('')
  let [text,setText]=useState('')

  return (
   

    <contexoo.Provider value={{term,setTerm,setText,text}}>
      {children}
    </contexoo.Provider>
  )
}

export default ContextPixa
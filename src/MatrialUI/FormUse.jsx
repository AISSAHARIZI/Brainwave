import React, { useContext } from 'react'
import HeadUI from './headUI'
import Details1 from './Details1'
import Details2 from './Details2'
import Info from './Info'
import ThankuPage from './ThankuPage'
import { ContextUI } from './UIContext'

function FormUse() {  
  let {step}=useContext(ContextUI)
  return (
    
    <section className='text-black'>
      <HeadUI/>
      {step===1 &&<Details1/>}
      {step===2 &&<Details2/>}
      {step===3 &&<Info/>}
      {step===4 &&<ThankuPage/>}
    </section>
   
  )
}

export default FormUse
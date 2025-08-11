import React from 'react'
import { useParams } from 'react-router-dom'
import HBD from '../HB Dister/HBD'
import FastTodo from '../Fasttodo/FastTodo'
import Brainware from '../Brainware/Brainware'

function ProfileSingle() {
  let parms=useParams()
  return (
    <div >
     
        {parms.id==='HB' &&<HBD/>}
        {parms.id==='todo' &&<FastTodo/>}
        {parms.id==='Brainware'&& <Brainware/>}
     
      <div>

      </div>
    </div>
  )
}

export default ProfileSingle
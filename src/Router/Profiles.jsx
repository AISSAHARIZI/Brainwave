import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function Profiles() {

  let profils=['HB','todo','Brainware']
  return (
    <div className='flex flex-col space-y-36 '>
      <div className='bg-blue-400 h-[5rem] px-9 flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          {profils.map(prof=>
            <NavLink className={({isActive})=> {
              return isActive ? 'text-amber-800' : ''
            } }   to={`/profiles/${prof}`}> <p className='text-2xl' > {prof}</p>
            </NavLink>
          )}
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Profiles
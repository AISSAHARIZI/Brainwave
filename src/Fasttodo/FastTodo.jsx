import React, { useState } from 'react'

function FastTodo() {

  let [newTesk,setNewtask]=useState('')
  let [tasks,setTasks]=useState([])



  function Add(){
    setTasks(prev=>prev.includes(newTesk)? prev: [...prev,{name:newTesk,completed:false}]
    )
  }

  function Delet(index){
    
    setTasks(prev=> {
      let newTASKS=prev
      newTASKS=prev.filter((_,i)=> i!==index  )
      return newTASKS
    })
  }

  function Complet(index){
    setTasks(prev=> prev.map((task,i)=> i===index? {...task,completed:!task.completed} : task))
  }
  return (
    <section className='w-[30%] mx-auto flex flex-col justify-center space-y-3.5 '>
      <p className='text-3xl font-bold '>ToDos</p>
      <p>click todo to toggle completed</p>
      <div className='flex flex-col gap-1 items-center '>
        {tasks.map((task,index)=> 
          <div onClick={()=>Complet(index)}  key={index} className='flex items-center justify-between bg-gray-400 px-2 py-1 w-full'>
            <p  className={`${task.completed?' underline':''}  cursor-pointer `}>{task.name}</p>
            <i onClick={()=>Delet(index)} className={`fa-solid fa-trash cursor-pointer `}></i>
          </div>
        )}
       
      </div>
      <input value={newTesk} onChange={(e)=>setNewtask(e.target.value)} type="text" placeholder='add a todo...' className='border-gray-400 border-1 p-1' />
      <button onClick={Add} className='bg-gray-700 p-1.5'>Add</button>
    </section>
  )
}

export default FastTodo
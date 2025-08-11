import React, { useEffect, useState } from 'react'
import { nume } from './indexsimple'
import { useSpring,animated } from '@react-spring/web'

function ListPost() {

  let [Posts,setPosts]=useState([])
  let [pageNum,setPagenum]=useState(1)
  
  let [style,api]=useSpring(()=>{
    ({
        from:{opacity:0 , y:-50},
        to:{opacity:1 , y:0},
       
  })})


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> setPosts(data))
    api.start({
      from:{opacity:0 , y:-50},
      to:{opacity:1 , y:0},
     
    })
  },[])

  function tryEffect() {
    api.start({
      from:{opacity:0 , y:-50, number:0},
      to:{opacity:1 , y:0, number:10},
      
    })
  }

  return (
    <div className='w-[60%] ml-6 mt-16'>
      <animated.div style={style}>
        {Posts.map(post=> post.userId=== pageNum ?
          <div className='text-xl border-b-gray-400 border-b-1 py-2'>
            <p>{post.title}</p>
          </div>
        : null)}
        </animated.div>
        <div onClick={tryEffect}  className='mt-10'>
          {nume.map((num)=>
            <span onClick={()=>{
              setPagenum(num)
              
            }} className={` ${pageNum===num ? 'border-3 border-gray-600/50' : 'border-gray-400 border-[0.5px]'} text-blue-700 border-solid p-2 px-3   cursor-pointer`}><strong>{num}</strong></span>
          )}
        </div>
      
    </div>
  )
}

export default ListPost
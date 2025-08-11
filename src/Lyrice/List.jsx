import React, { useContext, } from 'react'
import { lyriceContx } from './LyricContext'

function List() {

  let {artists,Loadinge,setPage,setTheindex}=useContext(lyriceContx)
 
  return (
    <div className=' flex flex-col items-center space-y-5 '>
      <h1><i className="fa-solid fa-music"></i> Search For A Song</h1>
      {Loadinge && <div> <h1>Loading....</h1></div>}
      <p>get a lyric for any track</p>
      <input type="text" placeholder='search for lyrice.... ' className='p-2 border-gray-400 border-1 w-full ' />
      <button className='bg-blue-600 text-white w-full  '><p className='text-xl font-semibold'>Get Track Lyric</p></button>
      <div className='border-1 border-gray-300 p-3 w-full'>
        <h2 className='text-center text-3xl'>Search Result</h2>
        <div className='grid grid-cols-2 gap-3  p-2 '>
         {artists.map((artist,index)=>
           <div key={index} className='w-[100%]  text-[1.2rem]  border-gray-300 shadow-2xl p-2'>
           <p className='font-bold'></p>
           <p className='mt-2'><i className="fa-solid fa-play "></i><strong> Track :</strong> {artist.name}</p>
           <p className='mb-5'><i className="fa-solid fa-plus rounded-full "></i><strong> Album :</strong>{artist.albums.length?artist.albums.slice(0,1).map(album=> <span>{album.name}</span>):'No album Founder'}</p>
           <button onClick={()=>{
            setTheindex(index)
            setPage(2)
          }} className='w-full bg-gray-800 text-amber-50 '><p>View Lyric</p></button>
         </div>
         )}
        </div>
        
      </div>
    </div>
  )
}

export default List
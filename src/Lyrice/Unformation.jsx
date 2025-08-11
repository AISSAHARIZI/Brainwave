import React, { useContext } from 'react'
import { lyriceContx } from './LyricContext'

function Unformation() {
  let {setPage,artists,chekindex}=useContext(lyriceContx)
  return (
    <div className='w-[60%] mx-auto'>
      <button onClick={()=> setPage(1)} className='bg-gray-800 text-amber-50 my-5 rounded-lg'>Go back</button>
      {artists.map((artist,index)=> index===chekindex?
         <div className='border-1 border-gray-400 py-3 px-4'>
         <p className='border-b-gray-300 border-b-1 p-2 text-2xl'><strong>The information By</strong> {artist.name} </p>
         <p className='border-b-gray-300 border-b-1 p-2 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis esse voluptates placeat commodi atque, similique inventore aspernatur, est deleniti in blanditiis unde odio totam vero distinctio quasi fuga tenetur recusandae.</p>
         <p className='border-b-gray-300 border-b-1 p-2 text-xl'><strong>Album ID:</strong> {artist.id}</p>
         <p className='border-b-gray-300 border-b-1 p-2 text-xl'><strong>song Genger:</strong> {artist.genres
.length ? artist.genres.map((genre,index)=> index===artist.genres.length ?  genre : genre+' /'  )  : 'No genres Founder'       } </p>
         <p className='border-b-gray-300 border-b-1 p-2 text-xl'><strong>Folowers :</strong> {artist.followers}</p>
         <p className=' p-2 text-xl'><strong>First Relise Date :</strong> {artist.albums
         .length ? artist.albums.slice(0,1).map(albums=> albums.release_date
         ) : 'Not date Founder'}</p>
       </div>:null
      )}
    </div>
  )
}

export default Unformation
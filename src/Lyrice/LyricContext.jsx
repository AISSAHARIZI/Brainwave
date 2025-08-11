

import React, {  createContext, useEffect, useState } from 'react'

export let lyriceContx=createContext() 

function LyricContext({children}) {

  const [artists, setArtist] = useState([]);
  const [Loadinge, isLoading] = useState(false);
  const [page,setPage]=useState(1)
  const [chekindex,setTheindex]=useState('')
  const clientId = "94652d97a116441fabc79abdc35d97eb";
  const clientSecret = "3009e2fa7def44e683177b1b33cfc6bc";


  
 useEffect(() => {

  

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
      },
      body: "grant_type=client_credentials"
    })
      .then(res => res.json())
      .then(tokenData => {
        const token = tokenData.access_token;
        isLoading(false)
        // ابحث عن الفنان
        return fetch("https://api.spotify.com/v1/search?q=drake&type=artist", {
          headers: {
            "Authorization": "Bearer " + token
          }
        }).then(res => res.json())
          .then(data => {
            const artists = data.artists.items;
    
            // الآن، لكل فنان نجيب الألبومات
            return Promise.all(
              artists.map(async artist => {
                const albumsRes = await fetch(
                  `https://api.spotify.com/v1/artists/${artist.id}/albums?include_groups=album&limit=5`,
                  {
                    headers: {
                      "Authorization": "Bearer " + token
                    }
                  }
                );
                const albumsData = await albumsRes.json();
    
                return {
                  name: artist.name,
                  id: artist.id,
                  genres: artist.genres,
                  followers: artist.followers.total,
                  image: artist.images[0]?.url,
                  albums: albumsData.items.map(album => ({
                    name: album.name,
                    id: album.id,
                    release_date: album.release_date,
                    image: album.images[0]?.url
                  }))
                };
              })
            );
          });
      })
      .then(results => {
        console.log(results)
        setArtist(results);
      })
      .catch(err => console.error("Error:", err));
     
      isLoading(true)

      
    
        
  }, []);



  return (
    <lyriceContx.Provider value={{artists,setArtist,Loadinge, isLoading,page,setPage,chekindex,setTheindex}}>
      {children}
    </lyriceContx.Provider>
  )
}

export default LyricContext
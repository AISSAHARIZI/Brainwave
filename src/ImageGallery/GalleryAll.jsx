import React from 'react'
import Gallery from './Gallery'
import ContextPixa from './ContextPixa'

function GalleryAll() {
  return (
    <div>
      <ContextPixa>
        <Gallery/>
      </ContextPixa>
    </div>
  )
}

export default GalleryAll
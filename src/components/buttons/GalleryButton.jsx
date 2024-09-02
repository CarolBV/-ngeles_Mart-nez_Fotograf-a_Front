import React from 'react'
import "./buttons.scss"
import { Link } from 'react-router-dom'
const GalleryButton = () => {
  return (
    <div className='galleryContainer'>
        <Link to="/gallery">
        <button className='btnGallery'>Gallery</button>
        </Link>
    </div>
  )
}

export default GalleryButton
import React from 'react'
import "./buttons.scss"
import { Link } from 'react-router-dom'
const GalleryButton = () => {
  return (
    <div className='galleryContainer'>
        <Link to="/gallery">
        <button className='btnGallery'>Galeria</button>
        </Link>
    </div>
  )
}

export default GalleryButton
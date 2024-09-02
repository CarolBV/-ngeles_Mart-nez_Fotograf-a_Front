import React from 'react'
import Logo from './Logo'
import HomeButton from '../buttons/HomeButton'
import GalleryButton from '../buttons/GalleryButton'
import AboutMeButton from '../buttons/AboutMeButton'
import ContactButton from '../buttons/ContactButton'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className='navContainer'>
        <Logo/>
    <div className='navbar'>
      <HomeButton/>
      <GalleryButton/>
      <AboutMeButton/>
      <ContactButton/>
    </div>
    </nav>
  )
}

export default Navbar
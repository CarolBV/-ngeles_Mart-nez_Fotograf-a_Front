import React from 'react'
import Logo from './Logo'
import HomeButton from '../buttons/HomeButton'
import GalleryButton from '../buttons/GalleryButton'
import AboutMeButton from '../buttons/AboutMeButton'
import ContactButton from '../buttons/ContactButton'
import "./navbar.scss"
import AvatarButton from '../buttons/AvatarButton'
import { useAuth } from '../../context/auth/authContext'

const Navbar = () => {
  const { isAuthenticated } = useAuth();  // Obtén el estado de autenticación

  return (
    <nav className="navContainer">
      <Logo />
      <div className="navbar">
        <HomeButton />
        <GalleryButton />
        <AboutMeButton />
        <ContactButton />
        {/* Solo mostramos el AvatarButton si el admin está autenticado */}
        {isAuthenticated && <AvatarButton />}  
      </div>
    </nav>
  );
};

export default Navbar;
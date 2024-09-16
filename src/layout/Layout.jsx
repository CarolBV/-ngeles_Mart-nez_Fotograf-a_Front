import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './layout.scss';

const Layout = () => {
  return (
    <div >
      <nav className='navBackColor'>
      <Navbar/>
      </nav>
     <main>
      <Outlet/>
     </main>
    </div>
  )
}

export default Layout
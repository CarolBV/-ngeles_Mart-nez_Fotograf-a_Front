import React from 'react'
import "./buttons.scss"
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <div className='homeContainer'>
      <Link to="/">
      <button className='btnHome'>Inicio</button>
      </Link>
    </div>
  )
}

export default HomeButton
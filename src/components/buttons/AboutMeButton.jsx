import React from 'react'
import "./buttons.scss"
import { Link } from 'react-router-dom'

const AboutMeButton = () => {
  return (
    <div className='aboutContainer'>
        <Link to= "/aboutme">
        <button className='btnAbout'>About Me</button>
        </Link>
    </div>
  )
}

export default AboutMeButton
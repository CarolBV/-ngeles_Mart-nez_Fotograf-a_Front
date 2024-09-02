import React from 'react'
import "./buttons.scss"
import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <div className='contactContainer'>
        <Link to="/contact">
        <button className='btnContact'>Contact</button>
        </Link>
    </div>
  )
}

export default ContactButton
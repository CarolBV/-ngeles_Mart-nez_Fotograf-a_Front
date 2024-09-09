import React from 'react'
import "./buttons.scss"
import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <div className='buttonContainer'>
        <Link to="/contact">
        <button className='btnContact'>Contacto</button>
        </Link>
    </div>
  )
}

export default ContactButton
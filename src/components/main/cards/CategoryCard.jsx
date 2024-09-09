import React from 'react'
import './categoryCard.scss'
import { Link } from 'react-router-dom'

const CategoryCard = () => {
  return (
    <div className='cardContainer'>
        <div className='card'>
            <img src="/assets/icons/DSC08059.jpg" alt="Galeria Exteriores" />
        </div>
        <div className='infoCategory'>
   <Link to='/outside'><h4>Exteriores</h4></Link>
</div>
    </div>
    
  )
}

export default CategoryCard
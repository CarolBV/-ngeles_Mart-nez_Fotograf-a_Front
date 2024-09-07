import React from 'react'
import "./aboutImage.scss"

const AboutImage = () => {
  return (
    <div>
    <div className='aboutMeContainer'>
    <img className='meImage'  src="/assets/icons/AboutMe.jpg" alt="About me" />
  </div>
  <div className='textAbout'>
<p>Sobre Mí <br/>
¡Hola! Soy Ángeles, una apasionada fotógrafa con más de 13 años de experiencia, 
dedicándome profesionalmente a captrurar momentos especiales 
desde hace más de 10 años. Mi especialidad es la fotografía infantil y familiar,
y encuentro mi mayor inspiración en los exteriores, donde la naturaleza 
añade un toque mágico a cada sesión.
</p>  
</div>
  </div>
  )
}

export default AboutImage
import React from 'react'
import "./aboutImage.scss"

const AboutImage = () => {
  return (
    <div className='aboutMeContainer'>
      <h2 className='titleAbout'>¡Hola! Soy Ángeles, encantada de tenerte por aquí</h2>
      <div className='aboutMeInfo'>
        <div className='textAbout'>
          <p>
            ¡Hola! soy <strong>Ángeles Martinez</strong>, <br/> una apasionada fotógrafa con más de 13 años de experiencia, 
            dedicándome profesionalmente a capturar momentos especiales. <br />Mi especialidad es la fotografía infantil y familiar,
            y encuentro mi mayor inspiración en los exteriores, donde la naturaleza 
            añade un toque mágico a cada sesión. <br />
            Desde que me convertí en mamá, he aprendido a valorar profundamente el peso de los recuerdos
          y lo rápido que pasa el tiempo. <br /> Esta experiencia personal me ha motivado a capturar esos momentos fugaces y convertirlos en recuerdos eternos para otras familias.
        
          </p>  
        </div>
        <div className='aboutMeImageContainer'>
          <img className='meImage' src="/assets/icons/AboutMe.jpg" alt="About me" />
        </div>
      </div>
      <h2 className='myGold'>Mi objetivo como fotógrafa: Es crear momentos que os permitan contar historias y viajar en el tiempo</h2>
      <div className='textAbout2'>
        <p className='moreAboutMe'>
          Además de mis estudios como Técnico Superior en Fotografía Artística, me mantengo en constante actualización a través de workshops y cursos especializados
          en áreas como <strong>fotografía newborn, iluminación y composición </strong>. Esto me permite ofrecer siempre
          lo mejor a mis clientes y estar al día con las últimas tendencias y técnicas del sector.
          </p>
        <p>
          Cuando no estoy detrás de la cámara, disfruto del cine y la lectura, de donde saco muchas referencias e ideas para mis sesiones.
          Mi estación favorita es el otoño, y me encanta <strong>fotografiar las festividades de Hallowen y Navidad</strong>, capturando la magia y el espíritu de esas épocas del año.
      
        </p>
      </div>
    </div>
  )
}
export default AboutImage
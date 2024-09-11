import { useEffect, useState } from 'react';
import axios from 'axios';
import './banner.scss';

const Banner = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Obtener las imágenes aleatorias del backend
    useEffect(() => {
      const fetchRandomImages = async () => {
        try {
          const response = await axios.get('http://localhost:3001/gallery/random/images');
          setImages(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching random images:', error.response);
          setError('Error al cargar imágenes');
          setLoading(false);
        }
      };

      fetchRandomImages();
    }, []);

    // Controlar el cambio automático de slides cada 3 segundos
    useEffect(() => {
      if (images.length > 0) { // Solo ejecuta el intervalo si hay imágenes cargadas
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // Cambia al siguiente slide
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
      }
    }, [images]); // Este `useEffect` depende de las imágenes cargadas

    if (loading) return <p>Cargando imágenes...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div className="bannerContainer">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`bannerSlide ${index === currentSlide ? 'active' : ''}`} // Solo la imagen activa tiene la clase "active"
            style={{
              opacity: index === currentSlide ? 1 : 0, // Solo la imagen activa es visible
              transition: 'opacity 0.5s ease-in-out' // Transición suave entre imágenes
            }}
          >
            <img src={image.imageUrl} alt={image.name} className="bannerImage" />
          </div>
        ))}
      </div>
    );
  };

export default Banner;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/gallery', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener imágenes', error);
        setError('Error al obtener las imágenes');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Cargando imágenes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='exteriorContainer'>
      <img src="/assets/icons/Arrow-left.svg" alt="Arrow Image" />
    <div className="gallery-container">
      {images.length > 0 ? (
        images.map((image) => (
          <div key={image.id} className="image-card">
            <h3>{image.name}</h3>
            <img src={image.imageUrl} alt={image.name} className="image-item" />
            <p>Categoría: {image.category}</p>
          </div>
        ))
      ) : (
        <p>No hay imágenes para mostrar</p>
      )}
    </div>
    </div>
  );
};

export default ImageGallery;
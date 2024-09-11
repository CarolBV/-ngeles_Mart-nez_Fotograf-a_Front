import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditModal from './modals/EditModal';
import { useAuth } from '../context/auth/authContext';
import DeleteButton from './buttons/DeleteButton';
import { useParams } from 'react-router-dom';
import './imageGalleryByCategory.scss';


const ImageGalleryByCategory = () => {
  const { category } = useParams(); // Captura el parámetro dinámico de la URL
  const { isAuthenticated } = useAuth(); // Para saber si el admin está logueado
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageToEdit, setImageToEdit] = useState(null); // Imagen seleccionada para editar

  useEffect(() => {
    const fetchImagesByCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/gallery/category/${category}`);
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar las imágenes');
        setLoading(false);
      }
    };

    fetchImagesByCategory();
  }, [category]);

  const handleEditClick = (image) => {
    setImageToEdit(image); // Mostrar el modal para editar la imagen
  };

  const handleImageDeleted = (imageId) => {
    setImages(images.filter((image) => image.id !== imageId)); // Actualizar la lista de imágenes tras eliminar una
  };

  if (loading) return <p>Cargando imágenes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="imageGallery">
      {images.map((image) => (
        <div key={image.id} className="imagecard">
          <img className='imgGallery' src={image.imageUrl} alt={image.name} />
          <p>{image.name}</p>
          {isAuthenticated && (
            <>
              <button onClick={() => handleEditClick(image)}>Editar</button>
              <DeleteButton imageId={image.id} onImageDeleted={handleImageDeleted} />
            </>
          )}
        </div>
      ))}
      {imageToEdit && (
        <EditModal
          image={imageToEdit}
          onClose={() => setImageToEdit(null)}
          onEditSuccess={(updatedImage) => {
            setImages(images.map((img) => (img.id === updatedImage.id ? updatedImage : img)));
          }}
        />
      )}
    </div>
  );
};

export default ImageGalleryByCategory;
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
  const [imageToView, setImageToView] = useState(null); // Imagen seleccionada para ver en tamaño completo

  useEffect(() => {
    const fetchImagesByCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/gallery/category/${category}`);
        console.log('Imágenes de la categoría:', response.data);
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar las imágenes');
        setLoading(false);
      }
    };

    fetchImagesByCategory();
  }, [category]);

  const handleImageDeleted = (imageId) => {
    setImages(images.filter((image) => image.id !== imageId)); // Actualizar la lista de imágenes tras eliminar una
  };

  const handleImageClick = (image) => {
    setImageToView(image); // Mostrar la imagen en tamaño completo
  };

  if (loading) return <p>Cargando imágenes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="imageGallery">
      {images.map((image) => (
        <div key={image.id} className="imageCard" onClick={() => handleImageClick(image)}>
          {isAuthenticated && (
            <DeleteButton
              imageId={image.id}
              onImageDeleted={handleImageDeleted}
            />
          )}
          <img className="imgGallery" src={image.imageUrl} alt={image.name} />
          <p className="imageTitle">{image.name}</p>
        </div>
      ))}

      {/* Modal para ver la imagen en tamaño completo */}
      {imageToView && (
        <div className="imageModal" onClick={() => setImageToView(null)}>
          <img className="fullImage" src={imageToView.imageUrl} alt={imageToView.name} />
        </div>
      )}

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
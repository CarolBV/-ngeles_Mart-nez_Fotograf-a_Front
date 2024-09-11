import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditModal from './modals/EditModal';
import { useAuth } from '../context/auth/authContext';
import DeleteButton from './buttons/DeleteButton';
import { useParams } from 'react-router-dom';
import './imageGalleryByCategory.scss';
import EditButton from './buttons/EditButton';



const ImageGalleryByCategory = () => {
  const { category } = useParams();
  const { isAuthenticated } = useAuth();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageToEdit, setImageToEdit] = useState(null);
  const [imageToView, setImageToView] = useState(null);

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

  const handleImageDeleted = (imageId) => {
    setImages(images.filter((image) => image.id !== imageId));
  };

  const handleImageClick = (image) => {
    setImageToView(image);
  };

  return (
    <div className="imageGallery">
      {images.map((image) => (
       <div key={image.id} className="imageCard" onClick={() => handleImageClick(image)}>
       {isAuthenticated && (
         <DeleteButton imageId={image.id} onImageDeleted={handleImageDeleted} />
       )}
       
       <img className="imgGallery" src={image.imageUrl} alt={image.name} />
       
       <div className="imageFooter">
         <p className="imageTitle">{image.name}</p>
         {isAuthenticated && (
           <EditButton onClick={(e) => { e.stopPropagation(); setImageToEdit(image); }} />
         )}
       </div>
     </div>
      ))}

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
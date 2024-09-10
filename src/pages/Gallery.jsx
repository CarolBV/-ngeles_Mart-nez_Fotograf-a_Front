import React from 'react'
import CategoryCard from '../components/main/cards/CategoryCard'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './gallery.scss';

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/gallery/categories');
        console.log('Response data:', response.data); // Verifica que recibes un array de objetos con imageUrl y category
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar las categorías');
        setLoading(false);
      }
    };

    fetchCategoryImages();
  }, []);

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="category-gallery">
      {categories.map((categoryData) => (
        <CategoryCard
          key={categoryData.category} // Asegúrate de que categoryData.category exista
          imageUrl={categoryData.imageUrl} // Asegúrate de que categoryData.imageUrl sea una cadena
          category={categoryData.category} // Asegúrate de que categoryData.category sea una cadena
        />
      ))}
    </div>
  );
};

export default Gallery;
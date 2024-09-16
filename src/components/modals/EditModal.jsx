
import './editModal.scss';
import axios from "axios";
import { useState, useEffect } from "react";

const EditModal = ({ image, onClose, onEditSuccess }) => {
  const [name, setName] = useState(image.name);
  const [category, setCategory] = useState(image.category);
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  // Obtener las categorías de la base de datos
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/gallery/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error al obtener las categorías', error);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    if (file) {
      formData.append('file', file); // Enviar la nueva imagen solo si se selecciona
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:3001/gallery/image/${image.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      onEditSuccess(response.data); // Notifica al padre que la edición fue exitosa
      setSuccessMessage('Cambios realizados con éxito.'); // Establece el mensaje de éxito
      setTimeout(() => {
        setSuccessMessage(''); // Limpiar el mensaje después de 3 segundos
        onClose(); // Cierra el modal después de un pequeño retraso
      }, 5000);
    } catch (error) {
      console.error('Error al editar la imagen', error);
    }
  };

  return (
    <div className="editModalOverlay" onClick={onClose}>
      <div className="editModalContent" onClick={(e) => e.stopPropagation()}>
        <h2 className='editTitleModal'>Editar imagen</h2>
        <input 
          className='editInputModal'
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nombre" 
        />
        
        {/* Select para las categorías */}
        <select 
          className='editSelectModal'
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat.category}>{cat.category}</option>
          ))}
        </select>

        <input className='editInputModal2' type="file" onChange={(e) => setFile(e.target.files[0])} />
        
        <div className="editModalButtons">
          <button className="editConfirmButton" onClick={handleEdit}>Guardar cambios</button>
          <button className="editCancelButton" onClick={onClose}>Cancelar</button>
        </div>

        {/* Mostrar mensaje de éxito */}
        {successMessage && (
          <p className="editSuccessMessage">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default EditModal;
import axios from "axios";
import { useState } from "react";


const EditModal = ({ image, onClose, onEditSuccess }) => {
  const [name, setName] = useState(image.name);
  const [category, setCategory] = useState(image.category);
  const [file, setFile] = useState(null);

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
      onClose(); // Cierra el modal
    } catch (error) {
      console.error('Error al editar la imagen', error);
    }
  };

  return (
    <div className="modal">
      <h2>Editar imagen</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoría" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleEdit}>Guardar cambios</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default EditModal;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext'; // Contexto de autenticación
import './inputFile.scss';

const InputFile = () => {
    const { token } = useAuth(); // Obtenemos el token del contexto
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
       
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Token:", token);
        // Creamos un formData para enviar la imagen
        const formData = new FormData();
        formData.append('file', image);
        formData.append('name', name);
        formData.append('category', category);

        try {
            // Enviar la solicitud POST al backend con el token
            const response = await axios.post('http://localhost:3001/gallery/image', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                    
        
                },
                withCredentials: true,
                
            });
       
            console.log(response.data);
            navigate('/gallery'); // Redirigir después de subir la imagen
        } catch (err) {
            setError('Error al subir la imagen. Por favor, inténtelo de nuevo.');
            console.error(err);
        }
    };

    return (
        <div className='formAddImageContainer'> 
        <form onSubmit={handleSubmit}>
            <input className='inputFile' type="file" onChange={handleImageChange} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Selecciona una categoría</option>
                    <option value="Exterior">Exteriores</option>
                    <option value="Navidad">Navidad</option>
                    <option value="Halloween">Halloween</option>
                    <option value="Parejas">Parejas</option>
                    <option value="Bodas">Bodas</option>
                    <option value="Newborn">Bebés</option>
                    <option value="Estudio">Estudio</option>
                    {/* Añadir más categorías según lo necesites */}
                </select>
            <button type="submit">Subir Imagen</button>
        </form>
        </div>
    );
};

export default InputFile;
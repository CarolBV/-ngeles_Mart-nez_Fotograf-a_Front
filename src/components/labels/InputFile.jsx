import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth/authContext'; // Contexto de autenticación
import './inputFile.scss';

const InputFile = () => {
    const { token } = useAuth(); // Obtenemos el token del contexto
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(''); // Nuevo estado para el mensaje de éxito

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reseteamos el error si lo hubiera
        setSuccessMessage(''); // Reseteamos el mensaje de éxito

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

            // Mostrar mensaje de éxito
            setSuccessMessage('Imagen subida exitosamente');
            console.log(response.data);

            // Reseteamos los campos del formulario después de subir la imagen
            setImage(null);
            setName('');
            setCategory('');
        } catch (err) {
            setError('Error al subir la imagen. Por favor, inténtelo de nuevo.');
            console.error(err);
        }
    };

    return (
        <div className='formAddImageContainer'>
            <h2 className='titleFile'>Añadir Imagenes</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='inputFile'
                    type="file"
                    onChange={handleImageChange}
                    required
                />
                <input className='inpAddFileName'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                    required
                />
                <select className='selectFile'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="Exterior">Exteriores</option>
                    <option value="Navidad">Navidad</option>
                    <option value="Halloween">Halloween</option>
                    <option value="Parejas">Parejas</option>
                    <option value="Bodas">Bodas</option>
                    <option value="Newborn">Bebés</option>
                    <option value="Estudio">Estudio</option>
                </select>
                <button className='btnInpFile' type="submit">Subir Imagen</button>
            </form>

            {/* Mostrar mensaje de éxito o error */}
            {successMessage && <p className="successMessage">{successMessage}</p>}
            {error && <p className="errorMessage">{error}</p>}
        </div>
    );
};

export default InputFile;
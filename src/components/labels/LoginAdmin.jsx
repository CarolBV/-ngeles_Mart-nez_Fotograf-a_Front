import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import './loginAdmin.scss';


const LoginAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setToken, setAdminId } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/admin/login', {
                username,
                password
            });

            const token = response.data.token; // Capturamos el token que devuelve el backend
            const adminId = response.data.adminId; // Capturamos el adminId si es devuelto

            setToken(token); // Guardamos el token en el AuthContext
            setAdminId(adminId); // Guardamos el adminId en el AuthContext
            
            navigate('/admin'); // Redirigimos a la página de galería
        } catch (err) {
            setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
        }
    };

  return (
    <div className="loginContainer">
    <h2 className='titleLogin'>Iniciar sesión</h2>
    <form onSubmit={handleSubmit}>
        <div className='loginContainer2'>
        <div className='labLogin'>
            <label className='labUser'>Usuario:</label>
            <input className='logInput'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
        </div>
        <div className='labPassword'>
            <label className='labPass'>Contraseña:</label>
            <input className='logInput2'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
           
        </div>
        </div>
        <button className='btnLog' type="submit">Iniciar sesión</button>
     
        {error && <p>{error}</p>}
    </form>

</div>
);
};

export default LoginAdmin
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth/authContext';


const PrivateRoute = ({ element }) => {
    const { token } = useAuth();  // Verificamos si existe un token (autenticado)

    // Si el usuario no está autenticado, redirigirlo a la página de login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Si el usuario está autenticado, renderiza el componente solicitado
    return element;
};

export default PrivateRoute;
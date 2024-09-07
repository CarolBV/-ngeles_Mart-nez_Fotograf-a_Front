import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth/authContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { token } = useAuth();  // Usamos el token para verificar autenticación

    return (
        <Route
            {...rest}
            element={token ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
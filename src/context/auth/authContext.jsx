
import { createContext, useState, useContext, useEffect } from "react";


// Crea el contexto
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Verifica si estamos en el cliente (navegador)
  const isClient = typeof window !== 'undefined';

  const [token, setToken] = useState(() => {
    if (isClient) {
      try {
        return localStorage.getItem("token");
      } catch (error) {
        console.error("Error accediendo al localStorage:", error);
        return null;
      }
    }
    return null;  // En el servidor, no hay acceso a localStorage
  });

  const [adminId, setAdminId] = useState(() => {
    if (isClient) {
      try {
        return localStorage.getItem("loggedInAdminId");
      } catch (error) {
        console.error("Error accediendo al localStorage:", error);
        return null;
      }
    }
    return null;
  });

  // Estado de autenticación
  const isAuthenticated = !!token;

  useEffect(() => {
    if (isClient) {
      try {
        if (token && adminId) {
          localStorage.setItem("token", token);
          localStorage.setItem("loggedInAdminId", adminId);
        }
      } catch (error) {
        console.error("Error al guardar en localStorage:", error);
      }
    }
  }, [token, adminId, isClient]);

  const logout = () => {
    if (isClient) {
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInAdminId");
      } catch (error) {
        console.error("Error eliminando los datos del localStorage:", error);
      }
    }
    setToken(null);
    setAdminId(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, adminId, setAdminId, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
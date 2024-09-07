
import { createContext, useContext, useState, useEffect } from "react";

// Crea el contexto
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [adminId, setAdminId] = useState(() => localStorage.getItem("loggedInAdminId"));
  
  // Estado de autenticación
  const isAuthenticated = !!token;

  useEffect(() => {
    if (token && adminId) {
      localStorage.setItem("token", token);
      localStorage.setItem("loggedInAdminId", adminId);
    }
  }, [token, adminId]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInAdminId");
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
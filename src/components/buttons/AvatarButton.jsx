import { useAuth } from "../../context/auth/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './avatarButton.scss';

const AvatarButton = () => {
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar/ocultar el pop-up
  const { logout } = useAuth(); // Llamamos a la función de logout
  const navigate = useNavigate();

  // Función para manejar el logout
  const handleLogout = () => {
    logout(); // Desconectamos al usuario
    navigate('/login'); // Redirigimos al login u otra ruta tras el logout
  };

  return (
    <div className="avatarButton">
      {/* Imagen del avatar */}
      <img
        src="/assets/icons/avatar.svg"
        alt="Avatar image"
        className="avatarImage"
        onClick={() => setShowPopup(!showPopup)} // Mostrar el pop-up al hacer clic
      />

      {/* Pop-up de logout */}
      {showPopup && (
        <div className="logoutPopup">
          <p className="avatarP">¿Deseas cerrar sesión?</p>
          <button className="btnAvatar" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
};

export default AvatarButton;
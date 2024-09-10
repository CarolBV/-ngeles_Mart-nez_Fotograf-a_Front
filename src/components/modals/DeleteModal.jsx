const DeleteModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h4>¿Estás seguro de que deseas eliminar esta imagen?</h4>
          <button onClick={onConfirm}>Eliminar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    );
  };
  
  export default DeleteModal;
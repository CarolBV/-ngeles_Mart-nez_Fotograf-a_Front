import './deleteModal.scss';

const DeleteModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h4>¿Estás seguro de que deseas eliminar esta imagen?</h4>
        <div className="modalButtons">
          <button className="confirmButton" onClick={onConfirm}>Eliminar</button>
          <button className="cancelButton" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
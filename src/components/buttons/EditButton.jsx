import './editButton.scss';


const EditButton = ({ onClick }) => {
  return (
    <div className='editContainer' onClick={(e) => { e.stopPropagation(); onClick(e); }}>
      <img className='editImage' src="/assets/icons/edit.svg" alt="Edit" />
    </div>
  );
};

export default EditButton;
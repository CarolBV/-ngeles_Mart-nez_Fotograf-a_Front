import { Link } from 'react-router-dom';
import './categoryCard.scss';



const CategoryCard = ({ imageUrl, category }) => {
  console.log('imageUrl:', imageUrl); // Verifica qué valor tiene imageUrl
  console.log('category:', category); // Verifica qué valor tiene category

  return (
    <div className="categoryCard">
      {/* Verifica que imageUrl sea una cadena y no un objeto */}
      {typeof imageUrl === 'string' && (
        <img className="categoryCardImage" src={imageUrl} alt={category} />
      )}
      <Link to={`/gallery/category/${category}`} className="categoryCardLink">
        <h3 className="categoryCardTitle">{category}</h3>
      </Link>
    </div>
  );
};

export default CategoryCard;
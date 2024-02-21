import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../../context/CardContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const { id, title, image, category, price, description, rating } = product;

  return (
   

      <div className="card-container" key={id}>
            <div className="card-header">
              <div className="card-image">
               
                <img src={image} alt={title} />
              
              </div>
              <div className="card-header-info">
                <h3 className="card-title">{title}</h3>
                <p className="card-category">{category}</p>
              </div>
            </div>
            <div className="card-description">
              <p className="card-price">${price}</p>
              <p className="card-description">{description}</p>
              <div className="card-rating">
                <p className="card-rate">Rating: {rating.rate}</p>
                <p className="card-count">Count: {rating.count}</p>
              </div>
            </div>
            <div>
              <button onClick={handleAddToCart}>Agregar al carro</button>
            </div>
          </div>

   
    
  );
};

// Agrega la validación de propiedades
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, imageUrl, description }) => {
  return (
    <div className='product_card'>
      <img
        src={imageUrl}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;

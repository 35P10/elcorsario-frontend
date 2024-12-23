import React from 'react';

const ProductCard = ({ title, imageUrl, isCentered }) => {
  return (
    <div className={`card ${isCentered ? 'centered' : ''}`}>
      <img
        src={imageUrl}
        alt={title}
        className={`card-image ${isCentered ? '' : 'faded'}`}
      />
      {isCentered && <h2 className="card-title">{title}</h2>}
    </div>
  );
};

export default ProductCard;

import React from 'react';
import './ProductsSection.css';
import ProductCard from '../../components/ProductCard.jsx';

const ProductsSection = () => {
  return (
    <section className='products_section'>
      <h2>DISEÑADOS PARA CADA NECESIDAD</h2>
      <div className='products_section__section'>
          <ProductCard imageUrl='src\assets\images\product\bottle-1.png' title='BOTELLA DE 500 ML' description="Perfecta para acompañarte en tus días activos"/>
          <ProductCard imageUrl='src\assets\images\product\bottle-1.png' title='BOTELLA DE 500 ML' description="Perfecta para acompañarte en tus días activos"/>
          <ProductCard imageUrl='src\assets\images\product\bottle-1.png' title='BOTELLA DE 500 ML' description="Perfecta para acompañarte en tus días activos"/>
          <ProductCard imageUrl='src\assets\images\product\bottle-1.png' title='BOTELLA DE 500 ML' description="Perfecta para acompañarte en tus días activos"/>
          <ProductCard imageUrl='src\assets\images\product\bottle-1.png' title='BOTELLA DE 500 ML' description="Perfecta para acompañarte en tus días activos"/>
          
      </div>
    </section>
  );
};

export default ProductsSection;
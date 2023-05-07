import React from 'react';
import './Product.scss';
import ProductButton from './ProductButton/ProductButton';

const Product = (props) => {
  return (
    <div>
      <div className='productTitle'><h2>All Products</h2></div>
      <div className='productButtonList'>
        <ProductButton />
      </div>
    </div>
  )
};

export default Product;
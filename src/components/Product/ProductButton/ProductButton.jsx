import React from 'react';
import './ProductButton.scss';

const ProductButton = (props) => {
  return (
    <a className='productButtonLink'>
      <div className='productButtonMain'>
        <div className='productButtonTitle'>Product Ttile</div>
        <div className='productButtonImage'>Product Image</div>
      </div>
    </a>
  )
};

export default ProductButton;
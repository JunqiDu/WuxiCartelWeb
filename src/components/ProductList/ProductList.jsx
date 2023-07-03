import React from 'react';
import './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ProductList = (props) => {
  return (
    <div className='productListDiv'>
      <div className='productListTopNav'>
        <a className='productListTopNavLink' href="/allProduct">All Product</a>
        <FontAwesomeIcon icon={solid("chevron-right")} size="l" style={{ color: "#000000", }} />
        <p>Types</p>
      </div>
      <div><h3>Types</h3></div>
      <div>
        <div className='productListSideCheckBox'></div>
        <div>
          <div className='productListButtonList'>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`reverse-${type}`} className="mb-3">
                  <Form.Check
                    label="Type 1"
                    name="group1"
                    type={type}
                    id={`reverse-${type}-1`}
                  />
                  <Form.Check
                    label="2"
                    name="group1"
                    type={type}
                    id={`reverse-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </div>
          <div className='productListPageList'></div>
        </div>
      </div>
    </div>
  )
};

export default ProductList;
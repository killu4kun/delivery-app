import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/cardProduct.css';

const CardProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="card">
      <div
        className="card-header"
        data-testid={ `customer_products__element-card-price-${product.id}`}
      >
        { product.price }
      </div>
      <div className="card-body">
        <img
          src={ product.urlImage }
          alt="imagem produto"
          className="img-product"
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </div>
      <div className="card-footer">
        <p
          className="name-product"
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </p>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${product.id}`}
          >
            -
          </button>
          <input 
            type="number"
            name="qtd"
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string
  })
};

export default CardProduct;

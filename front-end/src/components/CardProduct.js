import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { CheckoutConext } from '../context/CheckoutContext';
import '../styles/cardProduct.css';

const CardProduct = ({ product }) => {
  const { productCheckout } = useContext(CheckoutConext);
  const [quantity, setQuantity] = useState(0);
  const [buttonSum, setButtonSUm] = useState(true);

  const addProduct = () => {
    const sum = quantity + 1;
    setQuantity(sum);
    productCheckout(product, sum);
  };

  const removeProduct = () => {
    const sum = quantity - 1;
    setQuantity(sum);
    productCheckout(product, sum);
  };

  useEffect(() => {
    if (quantity > 0) {
      setButtonSUm(false);
    } else {
      setButtonSUm(true);
    }
  }, [quantity]);

  useEffect(() => {
    if (localStorage.getItem('checkout')) {
      const checkout = JSON.parse(localStorage.getItem('checkout'));
      const filter = checkout.filter((productLocal) => productLocal.id === product.id);
      if (filter[0]) {
        const qty = filter[0].quantity;
        setQuantity(qty);
      }
    }
  }, [product]);

  return (
    <div className="card">
      <div
        className="card-header"
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {
          Intl.NumberFormat(
            'pt-br',
            { style: 'currency', currency: 'BRL' },
          )
            .format(product.price)
        }
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
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            disabled={ buttonSum }
            onClick={ removeProduct }
            className="removeButton"
          >
            -
          </button>
          <input
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            onChange={ () => console.log('nada') }
            className="inputQuantity"
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ addProduct }
            className="addButton"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default CardProduct;

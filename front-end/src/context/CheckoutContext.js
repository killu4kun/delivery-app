import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const CheckoutConext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkout, setCheckout] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const resultTotal = (arrayProduct) => {
    const total = arrayProduct.reduce((
      totalOrder,
      product,
    ) => totalOrder + (Number(product.price) * product.quantity), 0);
    return total;
  };

  const productCheckout = (product, quantity) => {
    if (quantity === 0) {
      const newArray = checkout.filter((
        productFilter,
      ) => productFilter.id !== product.id);
      setCheckout(newArray);
      localStorage.setItem('checkout', JSON.stringify(newArray));
      setTotalPrice(resultTotal(newArray));
      localStorage.setItem('totalPrice', JSON.stringify(resultTotal(newArray)));
    } else {
      const filter = checkout.filter((productFilter) => productFilter.id === product.id);
      if (filter.length < 1) {
        const newArray = checkout;
        product.quantity = quantity;
        newArray.push(product);
        setCheckout(newArray);
        localStorage.setItem('checkout', JSON.stringify(newArray));
      } else {
        const newArray = checkout.filter((
          productFilter,
        ) => productFilter.id !== product.id);
        product.quantity = quantity;
        newArray.push(product);
        setCheckout(newArray);
        localStorage.setItem('checkout', JSON.stringify(newArray));
      }

      setTotalPrice(resultTotal(checkout));
      localStorage.setItem('totalPrice', JSON.stringify(resultTotal(checkout)));
    }
  };

  useEffect(() => {
    if (localStorage.getItem('checkout')) {
      setCheckout(JSON.parse(localStorage.getItem('checkout')));
    }
  }, []);

  return (
    <CheckoutConext.Provider
      value={ {
        productCheckout,
        checkout,
        totalPrice,
        setTotalPrice,
      } }
    >
      { children }
    </CheckoutConext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

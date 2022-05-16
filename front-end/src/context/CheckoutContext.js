import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const CheckoutConext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkout, setCheckout] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buttonCheckout, setButtonCheckout] = useState(true);

  const resultTotal = (arrayProduct) => {
    const total = arrayProduct.reduce((
      totalOrder,
      product,
    ) => totalOrder + (product.unitPrice * product.quantity), 0);
    return total.toFixed(2);
  };

  const destroyCheckout = () => {
    setCheckout([]);
    localStorage.setItem('checkout', JSON.stringify([]));
    setTotalPrice(0);
    localStorage.setItem('totalPrice', JSON.stringify(0));
    setButtonCheckout(true);
  };

  const addProduct = ({ id, name, price }, quantity) => {
    let newArray = [];
    const product = {
      productId: id,
      name,
      quantity: 1,
      unitPrice: Number(price),
      subtotal: price * quantity,
    };

    const filter = checkout.filter((
      productFilter,
    ) => productFilter.productId === product.productId);

    if (filter.length < 1) {
      newArray = checkout;
      newArray.push(product);
    } else {
      newArray = checkout.filter((
        productFilter,
      ) => productFilter.productId !== product.productId);

      product.quantity = quantity;

      newArray.push(product);
    }

    const total = resultTotal(newArray);

    setCheckout(newArray);
    setTotalPrice(total);

    if (total > 0) setButtonCheckout(false);

    localStorage.setItem('checkout', JSON.stringify(newArray));
    localStorage.setItem('totalPrice', JSON.stringify(resultTotal(newArray)));
  };

  const removeProduct = ({ id, name, price }, quantity) => {
    let newArray = [];
    const product = {
      productId: id,
      name,
      quantity,
      unitPrice: Number(price),
      subtotal: price * quantity,
    };

    console.log(product);
    console.log(quantity);

    if (quantity <= 0) {
      newArray = checkout.filter((
        productFilter,
      ) => productFilter.productId !== product.productId);
    } else {
      newArray = checkout.filter((
        productFilter,
      ) => productFilter.productId !== product.productId);
      newArray.push(product);
    }

    const total = resultTotal(newArray);
    setCheckout(newArray);
    setTotalPrice(total);

    if (total > 0) {
      setButtonCheckout(false);
    }

    if (total <= 0) {
      setButtonCheckout(true);
    }

    console.log(newArray);
    localStorage.setItem('checkout', JSON.stringify(newArray));
    localStorage.setItem('totalPrice', JSON.stringify(resultTotal(newArray)));
  };

  useEffect(() => {
    if (localStorage.getItem('checkout')) {
      setCheckout(JSON.parse(localStorage.getItem('checkout')));
    }
    if (localStorage.getItem('totalPrice')) {
      setTotalPrice(Number(JSON.parse(localStorage.getItem('totalPrice'))));
      setButtonCheckout(false);
    }
  }, []);

  return (
    <CheckoutConext.Provider
      value={ {
        removeProduct,
        addProduct,
        checkout,
        totalPrice,
        setTotalPrice,
        buttonCheckout,
        destroyCheckout,
      } }
    >
      { children }
    </CheckoutConext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

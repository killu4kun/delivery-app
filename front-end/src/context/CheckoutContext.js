import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const CheckoutConext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkout, setCheckout] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buttonCheckout, setButtonCheckout] = useState(true);
  const [datatest, setDataTest] = useState('customer_products__button-cart');

  const resultTotal = (arrayProduct) => {
    const total = arrayProduct.reduce((
      totalOrder,
      product,
    ) => totalOrder + product.subtotal, 0);
    return total;
  };

  const addProduct = ({ id, name, price }, quantity) => {
    let newArray = [];
    const product = {
      productId: id,
      name,
      quantity: 1,
      unitPrice: Number(price),
      subtotal: Number(price) * quantity,
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
      product.subtotal = product.unitPrice * quantity;

      newArray.push(product);
    }
    const total = resultTotal(newArray);
    setCheckout(newArray);
    setTotalPrice(total);

    if (total > 0) setButtonCheckout(false);
    setDataTest('customer_products__checkout-bottom-value');

    localStorage.setItem('checkout', JSON.stringify(newArray));
    localStorage.setItem('totalPrice', JSON.stringify(resultTotal(newArray)));
  };

  const removeProduct = ({ id, name, price }, quantity) => {
    console.log({ id, name, price })
    let newArray = [];
    const product = {
      productId: id,
      name,
      quantity,
      unitPrice: Number(price),
      subtotal: Number(price) * quantity,
    };

    const filter = checkout.filter((
      productFilter,
    ) => productFilter.productId === product.productId);

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
      setDataTest('customer_products__checkout-bottom-value');
    }

    if (total <= 0) {
      setButtonCheckout(true);
      setDataTest('customer_products__button-cart');
    }

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
        datatest,
      } }
    >
      { children }
    </CheckoutConext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

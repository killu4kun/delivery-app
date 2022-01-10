import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import productsFetch from '../services/products-api';

export const ProductContext = createContext();

export const ProductsProvider = ({ children}) =>{
  const [products, setProducts] = useState([]);

  const fetchProducst = async () => {
    const response = await productsFetch();
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducst();
  }, [])

  return (
    <ProductContext.Provider value={ { products } }>
      { children }
    </ProductContext.Provider>
  );
}
ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
import React from 'react';
import Nav from '../components/Nav';

const Products = () => {
  const title = 'Produtos';
  return (
    <>
      <Nav titlePage={ title } />
      <h1>{ title }</h1>
    </>
  );
};

export default Products;

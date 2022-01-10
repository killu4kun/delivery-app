import React, { useContext, useEffect } from 'react';
import CardProduct from "../components/CardProduct";
import Nav from '../components/Nav';
import { ProductContext } from '../context/ProductsContext';
import "../styles/products.css";

const Products = () => {
  const title = 'Produtos';
  const { products } = useContext(ProductContext);

  return (
    <>
      <Nav titlePage={ title } />
      <main>
        <button className="button-checkout">Ver carrinho: R$12,99</button>
        <div className="grid-products">
          { products.length > 0 && products.map((product) => <CardProduct key={ product.id } product={ product }/>)}
        </div>
      </main>
    </>
  );
};

export default Products;

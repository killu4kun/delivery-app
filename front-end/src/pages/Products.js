import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardProduct from "../components/CardProduct";
import Nav from '../components/Nav';
import PrivateRoute from '../components/PrivateRoute';
import { CheckoutConext } from '../context/CheckoutContext';
import { ProductContext } from '../context/ProductsContext';
import "../styles/products.css";

const Products = () => {
  const title = 'Produtos';
  const { products } = useContext(ProductContext);
  const { totalPrice, setTotalPrice} = useContext(CheckoutConext);
  const localStorageUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (localStorage.getItem('totalPrice')) {
      setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')));
    }
  }, []);

  return (
    <>
      <Nav titlePage={ title } />
      <main>
        <button className="button-checkout">
          { 
            `Ver carrinho: ${Intl.NumberFormat(
              'pt-br',
              { style: 'currency', currency: 'BRL' })
            .format(totalPrice)}` 
          }
          </button>
        <div className="grid-products">
          { products.length > 0 && products.map((product) => (
              <CardProduct key={ product.id } product={ product }/>
            )
          )}
        </div>
      </main>
    </> 
  );
};

export default Products;

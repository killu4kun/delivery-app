import React from 'react';
import Nav from '../components/Nav';
import '../styles/checkout.css';

const Checkout = () => {
  const title = 'Produtos';

  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-checkout">
        <p>test</p>
      </main>
    </>
  );
};

export default Checkout;
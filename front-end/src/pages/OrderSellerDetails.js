import React from 'react';
import Nav from '../components/Nav';
import NavSeller from '../components/NavSeller';

const OrderSellerDetails = () => {
  const title = 'Seller Order Details';

  return (
    <main>
      <Nav>
        <NavSeller titlePage={ title } />
      </Nav>
      <h1>{ title }</h1>
    </main>
  );
};

export default OrderSellerDetails;

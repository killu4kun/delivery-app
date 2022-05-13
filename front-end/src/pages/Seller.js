import React from 'react';
import Nav from '../components/Nav';
import NavSeller from '../components/NavSeller';

function Seller() {
  const title = 'VenededorPedidos';

  return (
    <Nav>
      <NavSeller titlePage={ title } />
    </Nav>
  );
}

export default Seller;

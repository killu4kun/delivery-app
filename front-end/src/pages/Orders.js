import React from 'react';
import PropTypes from 'prop-types';
import CardOrder from '../components/CardOrder';
import Nav from '../components/Nav';
import '../styles/orders.css';

const Orders = ({ history }) => {
  const title = 'Orders';
  const orders = [1, 1, 0, 1];

  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-order">
        <div className="grid-orders">
          {
            orders.map((order) => (
              <CardOrder key={ order } history={ history } />
            ))
          }
        </div>
      </main>
    </>
  );
};

Orders.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Orders;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardOrder from '../components/CardOrder';
import Nav from '../components/Nav';
import { getSalesUser } from '../services/sales-api';
import '../styles/orders.css';

const Orders = ({ history }) => {
  const title = 'Orders';
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    try {
      const result = await getSalesUser(id);
      setOrders(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-order">
        <div className="grid-orders">
          {
            orders.length >= 1
            && orders.map((order, index) => (
              <CardOrder key={ index } history={ history } order={ order } />
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

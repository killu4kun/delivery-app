import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardOrder from '../components/CardOrder';
import Nav from '../components/Nav';
import NavCustomer from '../components/NavCustomer';
import { getSalesUser } from '../services/sales-api';
import '../styles/orders.css';

const Orders = ({ history }) => {
  const title = 'Pedidos';
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    try {
      const result = await getSalesUser(id);
      setOrders(result);
    } catch ({ response: { data } }) {
      console.log(data);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Nav>
        <NavCustomer titlePage={ title } />
      </Nav>
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

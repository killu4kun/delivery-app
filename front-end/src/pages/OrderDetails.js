import React from 'react';
import CustomerOrderHeader from '../components/CustomerOrderHeader';
import Nav from '../components/Nav';
import TableProduct from '../components/TableProduct';
import '../styles/orderDetails.css';

const products = require('../arrayCheckout.json');

const OrderDetails = () => {
  const title = 'Orders';

  const sales = {
    id: 1,
    userId: 1,
    sellerId: 1,
    total_price: 29.99,
    delivery_adress: 'endereço...',
    delivery_number: '61999-5555',
    products,
    status: 'Pendente',
  };
  /*
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    seller_id INT NOT NULL,
    total_price DECIMAL(9,2) NOT NULL,
    delivery_address VARCHAR(100) NOT NULL,
    delivery_number VARCHAR(50) NOT NULL,
    sale_date DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
  */
  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-orderDetails">
        <h3>Detalhes Produtos</h3>
        <div className="container-OrderDefails">
          <CustomerOrderHeader />
          <TableProduct />
          <div className="total-price-order">
           Total: R$ 36,90
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderDetails;

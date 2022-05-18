import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { CheckoutConext } from '../context/CheckoutContext';
import FormCheckout from '../components/checkout/FormCheckout';
import Nav from '../components/Nav';
import TableProduct from '../components/checkout/TableProduct';
import { saveSale } from '../services/sales-api';
import '../styles/checkout.css';

const Checkout = ({ history }) => {
  const title = 'Produtos';
  const { totalPrice, checkout, destroyCheckout } = useContext(CheckoutConext);
  const [sellerId, setSeller] = useState(2);
  const [deliveryAddress, setAddress] = useState('');
  const [deliveryNumber, setNumber] = useState('');

  const submitOrder = async () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));

    const date = new Date();
    const today = date.toISOString().split('T')[0];
    const time = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const newOrder = {
      userId: 3,
      sellerId,
      totalPrice: Number(totalPrice).toFixed(2),
      deliveryAddress,
      deliveryNumber,
      saleDate: today + time,
      status: 'Pendente',
      role,
      products: checkout,
    };

    try {
      const create = await saveSale(token, newOrder);
      destroyCheckout();
      history.push(`orders/${create}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-checkout">
        <h3>Finalizar Pedido</h3>
        <div className="container-checkout">
          <TableProduct />
          <div
            className="total-price"
            data-testid="customer_checkout__element-order-total-price"
          >
            {
              Intl.NumberFormat(
                'pt-br',
                { style: 'currency', currency: 'BRL' },
              )
                .format(totalPrice)
            }
          </div>
        </div>
        <h3> Detalhes e Endereço da entrega</h3>
        <div className="container-form">
          <FormCheckout
            props={ {
              setAddress,
              deliveryAddress,
              setNumber,
              deliveryNumber,
              setSeller,
              sellerId,
            } }
          />
          <button
            type="button"
            className="btn-finish-order"
            data-testid="customer_checkout__button-submit-order"
            onClick={ submitOrder }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </main>
    </>
  );
};

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;

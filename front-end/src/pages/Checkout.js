import React, { useContext, useState } from 'react';
import { CheckoutConext } from '../context/CheckoutContext';
import FormCheckout from '../components/checkout/FormCheckout';
import Nav from '../components/Nav';
import TableProduct from '../components/checkout/TableProduct';
import '../styles/checkout.css';

const Checkout = () => {
  const title = 'Produtos';
  const { totalPrice } = useContext(CheckoutConext);
  const [sellerId, setSeller] = useState(1);
  const [deliveryAdress, setAdress] = useState('');
  const [deliveryNumber, setNumber] = useState('');

  const submitOrder = () => {
    const newOrder = {
      userId: 1,
      sellerId,
      totalPrice,
      deliveryAdress,
      deliveryNumber,
      products,
    };

    console.log(newOrder);
  };

  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-checkout">
        <h3>Finalizar Pedido</h3>
        <div className="container-checkout">
          <TableProduct />
          <p>{ sellerId }</p>
          <p>{ deliveryAdress }</p>
          <p>{ deliveryNumber }</p>
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
              setAdress,
              deliveryAdress,
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

export default Checkout;

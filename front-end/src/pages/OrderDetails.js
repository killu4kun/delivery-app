import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CustomerOrderHeader from '../components/OrderDetails/CustomerOrderHeader';
import Nav from '../components/Nav';
import TableProduct from '../components/OrderDetails/TableProduct';
import { getSaleId } from '../services/sales-api';
import '../styles/orderDetails.css';

const OrderDetails = ({ match: { params: { id } } }) => {
  const title = 'Orders';
  const [orderHeader, setOrderHeader] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function callback() {
      const result = await getSaleId(id);
      const arrayProduct = result.map((
        sale,
      ) => ({ quantity: sale.quantity, ...sale.product }));
      setProducts(arrayProduct);
      setOrderHeader(result[0].sale);
    }
    callback();
  }, [id]);

  return (
    <>
      <Nav titlePage={ title } />
      <main className="main-orderDetails">
        <h3>Detalhes Produtos</h3>
        <div className="container-OrderDetails">
          <CustomerOrderHeader order={ orderHeader } />
          <TableProduct products={ products } />
          <div
            className="total-price-order"
            data-testid={ `customer_order_details__element-order-total-price` }
          >
            {
              ` Total: ${Intl.NumberFormat(
                'pt-br',
                {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                },
              )
                .format(orderHeader.totalPrice)}`
            }
          </div>
        </div>
      </main>
    </>
  );
};

OrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default OrderDetails;

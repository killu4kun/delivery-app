import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cardOrder.css';

const CardOrder = ({ history, order }) => {
  const date = new Date(order.saleDate);

  return (
    <button
      className="card-order"
      type="button"
      data-testid={ `customer_orders__element-order-id-${order.id}` }
      onClick={ () => history.push(`/customer/orders/${order.id}`) }
    >
      <div className="card-orderId">
        <span>Pedido</span>
        <p>{ order.id }</p>
      </div>
      <div className="card-status">
        <div
          className="status"
          data-testid={ `customer_orders__element-delivery-status-${order.id}` }
        >
          { order.status }
        </div>
      </div>
      <div className="card-date-price">
        <div
          className="date"
          data-testid={
            `customer_orders__element-order-date-${order.id}`
          }
        >
          { Intl.DateTimeFormat('pt-BR').format(date) }
        </div>
        <div className="price" data-testid={ `customer_orders__element-card-price-${1}` }>
          {
            Intl.NumberFormat(
              'pt-br',
              { style: 'currency', currency: 'BRL' },
            )
              .format(order.totalPrice)
          }
        </div>
      </div>
    </button>
  );
};

CardOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  order: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    sellerId: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default CardOrder;

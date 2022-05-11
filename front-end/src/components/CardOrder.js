import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cardOrder.css';

const CardOrder = ({ history }) => (
  <button
    className="card-order"
    type="button"
    data-testid={ `customer_orders__element-order-id-${1}` }
    onClick={ () => history.push(`/customer/order/${1}`) }
  >
    <div className="card-orderId">
      <span>Pedido</span>
      <p>0003</p>
    </div>
    <div className="card-status">
      <div
        className="status"
        data-testid={ `customer_orders__element-delivery-status-${1}` }
      >
        PENDENTE
      </div>
    </div>
    <div className="card-date-price">
      <div className="date" data-testid={ `customer_orders__element-order-date-${1}` }>
        08/04/2021
      </div>
      <div className="price" data-testid={ `customer_orders__element-card-price-${1}` }>
        R$ 23,80
      </div>
    </div>
  </button>
);

CardOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CardOrder;

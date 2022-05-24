import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../../services/users-api';
import '../../styles/CustomerOrderHeader.css';

const CustomerOrderHeader = ({ order }) => {
  const numMaxCharacters = 10;

  return (
    <div className="header-CustomOrder">
      <div
        className="header-order"
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `Pedido: ${order.id}` }
      </div>
      <div
        className="header-saller"
      >
        Vendedor(a):
        <span data-testid="customer_order_details__element-order-details-label-seller-name" >
          { order.seller }
        </span>
      </div>
      <div className="header-date">
        <span
          className="text-date"
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { order.saleDate
            && Intl.DateTimeFormat(
              'pt-br',
            ).format(new Date(order.saleDate.substr(0, numMaxCharacters))) }
        </span>
      </div>
      <div className="header-status">
        <span
          className="header-status-text"
          data-testid="customer_order_details__element-order-details-label-delivery-status"
        >
          { order.status }
        </span>
      </div>
      <div className="header-change-status">
        <button
          type="button"
          className="button-change-status"
          data-testid="customer_order_details__button-delivery-check"
          disabled
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
    </div>
  );
}

CustomerOrderHeader.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    sellerId: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default CustomerOrderHeader;

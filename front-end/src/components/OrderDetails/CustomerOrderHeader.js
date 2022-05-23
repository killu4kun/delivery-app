import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomerOrderHeader.css';

const CustomerOrderHeader = ({ order }) => {
  if(order.saleDate) {
    console.log(order.saleDate.substr(0, 10));
  }
  return (
    <div className="header-CustomOrder">
      <div
        className="header-order"
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido: { order.id }
      </div>
      <div 
        className="header-saller"
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Vend: { order.sellerId }
      </div>
      <div className="header-date">
        <span className="text-date" data-testid="customer_order_details__element-order-details-label-order-date">
         { order.saleDate && Intl.DateTimeFormat('pt-br').format(new Date(order.saleDate.substr(0,10))) }
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
        <div 
          type="button"
          className="button-change-status"
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderHeader;
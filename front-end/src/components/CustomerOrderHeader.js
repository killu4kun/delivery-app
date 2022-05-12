import React from 'react';
import '../styles/CustomerOrderHeader.css';

const CustomerOrderHeader = () => (
  <div className="header-CustomOrder">
    <div className="header-order">Pedido: 0003</div>
    <div className="header-saller">P. Vend: Fulana Pereira</div>
    <div className="header-date">
      <span className="text-date">
        07/04/2021
      </span>
    </div>
    <div className="header-status">
      <span className="header-status-text">ENTREGUE</span>
    </div>
    <div className="header-change-status">
      <div type="button" className="button-change-status">MARCAR COMO ENTREGUE</div>
    </div>
  </div>
);

export default CustomerOrderHeader;
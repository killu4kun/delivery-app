import React from 'react';
import '../styles/tableRowProduct.css';

const TableRowProduct = () => (
  <tr className="tr-product">
    <td className="td-item">1</td>
    <td className="td-description">Cerveja Skol Latão 450ml</td>
    <td className="td-quantity">3</td>
    <td className="td-unitPrice">R$4,10</td>
    <td className="td-subtotal">R$12,30</td>
  </tr>
);

export default TableRowProduct;
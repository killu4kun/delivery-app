import React, { useContext } from 'react';
import { CheckoutConext } from '../../context/CheckoutContext';
import TableRowProduct from './TableRowProduct';
import '../../styles/tableProduct.css';

const TableProduct = () => {
  const { checkout } = useContext(CheckoutConext);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="th-item">Item</th>
            <th className="th-description">Descrição</th>
            <th className="th-quantity">Quantidade</th>
            <th className="th-unitPrice">Valor Unitário</th>
            <th className="th-subtotal">Subtotal</th>
            <th className="th-remover">Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            checkout.map((
              product, index,
            ) => <TableRowProduct key={ index } item={ index } product={ product } />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;

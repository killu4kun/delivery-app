import React from 'react';
import '../../styles/tableProduct.css';
import TableRowProduct from './TableRowProduct';

const TableProduct = ({ products }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th className="th-item">Item</th>
          <th className="th-description">Descrição</th>
          <th className="th-quantity">Quantidade</th>
          <th className="th-unitPrice">Valor Unitário</th>
          <th className="th-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        { products.map((product, index) => <TableRowProduct key={ index } product={ product } index={ index } />) }
      </tbody>
    </table>
  </div>
);

export default TableProduct;
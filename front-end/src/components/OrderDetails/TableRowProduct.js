import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/tableRowProduct.css';

const TableRowProduct = ({ product, index }) => (
  <tr className="tr-product">
    <td
      className="td-item"
      data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
    >
      { index + 1 }
    </td>
    <td
      className="td-description"
      data-testid={ `customer_order_details__element-order-table-name-${index}` }
    >
      { product.name }
    </td>
    <td
      className="td-quantity"
      data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
    >
      { product.quantity }
    </td>
    <td
      className="td-unitPrice"
      data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
    >
      {
        ` ${Intl.NumberFormat(
          'pt-br',
          {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          },
        ).format(product.price)}`
      }
    </td>
    <td
      className="td-subtotal"
      data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
    >
      {
        ` ${Intl.NumberFormat(
          'pt-br',
          {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          },
        ).format(product.price * product.quantity)}`
      }
    </td>
  </tr>
);

TableRowProduct.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
};

export default TableRowProduct;

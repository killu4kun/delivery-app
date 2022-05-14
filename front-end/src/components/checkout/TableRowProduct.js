import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CheckoutConext } from '../../context/CheckoutContext';
import '../../styles/tableRowProduct.css';

const TableRowProduct = ({ product, item }) => {
  const { removeProduct } = useContext(CheckoutConext);

  return (
    <tr className="tr-product">
      <td
        className="td-item"
        data-testid={ `customer_checkout__element-order-table-item-number-${item + 1}` }
      >
        { item + 1 }
      </td>
      <td
        className="td-description"
        data-testid={ `customer_checkout__element-order-table-name-${product.productId}` }
      >
        { product.name }
      </td>
      <td
        className="td-quantity"
        data-testid={
          `customer_checkout__element-order-table-quantity-${product.productId}`
        }
      >
        { product.quantity }
      </td>
      <td
        className="td-unitPrice"
        data-testid={
          `customer_checkout__element-order-table-unit-price-${product.productId}`
        }
      >
        {
          Intl.NumberFormat(
            'pt-br',
            { style: 'currency', currency: 'BRL' },
          )
            .format(product.unitPrice)
        }
      </td>
      <td
        className="td-subtotal"
        data-testid={
          `customer_checkout__element-order-table-sub-total-${product.productId}`
        }
      >
        {
          Intl.NumberFormat(
            'pt-br',
            { style: 'currency', currency: 'BRL' },
          )
            .format(product.subtotal)
        }
      </td>
      <td
        className="td-remover"
        data-testid={
          `customer_checkout__element-order-table-remove-${product.productId}`
        }
      >
        <button
          type="button"
          onClick={ () => removeProduct({
            id: product.productId,
            name: product.name,
            price: product.unitPrice,
          }, 0) }
          className="btn-remover"
        >
          REMOVER
        </button>
      </td>
    </tr>
  );
};

TableRowProduct.propTypes = {
  item: PropTypes.number.isRequired,
  product: PropTypes.shape({
    productId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    subtotal: PropTypes.number,
  }).isRequired,
};

export default TableRowProduct;

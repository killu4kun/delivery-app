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
        data-testid={ `customer_checkout__element-order-table-item-number-${item}` }
      >
        { item + 1 }
      </td>
      <td
        className="td-description"
        data-testid={ `customer_checkout__element-order-table-name-${item}` }
      >
        { product.name }
      </td>
      <td
        className="td-quantity"
        data-testid={
          `customer_checkout__element-order-table-quantity-${item}`
        }
      >
        { product.quantity }
      </td>
      <td
        className="td-unitPrice"
        data-testid={
          `customer_checkout__element-order-table-unit-price-${item}`
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
          `customer_checkout__element-order-table-sub-total-${item}`
        }
      >
        {
          Intl.NumberFormat(
            'pt-br',
            { style: 'currency', currency: 'BRL' },
          )
            .format(product.unitPrice * product.quantity)
        }
      </td>
      <td
        className="td-remover"
      >
        <button
          type="button"
          data-testid={
            `customer_checkout__element-order-table-remove-${item}`
          }
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

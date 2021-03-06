import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/formCheckout.css';

const FormCheckout = ({ props: {
  setAddress,
  address,
  setNumber,
  number,
  setSeller,
  sellerId,
} }) => {
  const handleChangeAdress = ({ target: { value } }) => {
    setAddress(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleChangeSeller = ({ target: { value } }) => {
    setSeller(value);
  };

  return (
    <div className="container-formCheckout">
      <div className="input-form-checkout-seller">
        P. Vendedora Responsável:
        <select
          name="seller"
          className="input-form"
          data-testid="customer_checkout__select-seller"
          value={ sellerId }
          onChange={ handleChangeSeller }
        >
          <option value="2">Fulana</option>
        </select>
      </div>
      <div className="input-form-checkout-adress">
        Endereço
        <input
          name="adress"
          type="text"
          className="input-form"
          value={ address }
          onChange={ handleChangeAdress }
          data-testid="customer_checkout__input-address"
        />
      </div>
      <div className="input-form-checkout-number">
        Número
        <input
          name="number"
          type="text"
          className="input-form"
          value={ number }
          onChange={ handleChangeNumber }
          data-testid="customer_checkout__input-addressNumber"
        />
      </div>
    </div>
  );
};

FormCheckout.propTypes = {
  props: PropTypes.shape({
    setAddress: PropTypes.func,
    address: PropTypes.string,
    setNumber: PropTypes.func,
    number: PropTypes.string,
    setSeller: PropTypes.func,
    sellerId: PropTypes.number,
  }).isRequired,
};

export default FormCheckout;

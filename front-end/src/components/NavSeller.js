import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const NavSeller = ({ titlePage }) => (
  <div className="box-nav">
    <NavLink
      // data-testid="customer_products__element-navbar-link-orders"
      to="/seller/orders"
      className={ titlePage === 'VenededorPedidos' ? 'nav-link-active' : 'nav-link' }
    >
      Pedidos
    </NavLink>
  </div>
);

NavSeller.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default NavSeller;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const NavCustomer = ({ titlePage }) => (
  <div className="box-nav">
    <NavLink
      data-testid="customer_products__element-navbar-link-products"
      to="/customer/products"
      className={ titlePage === 'Produtos' ? 'nav-link-active' : 'nav-link' }
    >
      Produtos
    </NavLink>
    <NavLink
      data-testid="customer_products__element-navbar-link-orders"
      to="/customer/orders"
      className={ titlePage === 'Pedidos' ? 'nav-link-active' : 'nav-link' }
    >
      Meus Pedidos
    </NavLink>
  </div>
);

NavCustomer.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default NavCustomer;

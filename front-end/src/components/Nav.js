import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logout from '../images/logout.svg';
import PrivateRoute from '../components/PrivateRoute';
import '../styles/Nav.css';

const Nav = ({ titlePage }) => {
  if(!localStorage.getItem('user')) {
    return <PrivateRoute />
  }
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
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
      <div className="box-nav">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="nav-link-user"
        >
          { user.name }
        </div>
        <NavLink
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          className="nav-link-logout"
          onClick={ () => localStorage.removeItem('user') }
        >
          SAIR
          <img src={ Logout } alt="logout" className="svg-logout" />
        </NavLink>
      </div>
    </header>
  );
};

Nav.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default Nav;

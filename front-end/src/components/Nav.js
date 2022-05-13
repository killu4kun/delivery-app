import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logout from '../images/logout.svg';
import PrivateRoute from './PrivateRoute';
import '../styles/Nav.css';

const Nav = ({ children }) => {
  if (!localStorage.getItem('user')) {
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('checkout');
    return <PrivateRoute />;
  }
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      {children}
      <div className="box-nav">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="nav-link-user"
        >
          {user.name}
        </div>
        <NavLink
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          className="nav-link-logout"
          onClick={ () => {
            localStorage.removeItem('user');
            localStorage.removeItem('totalPrice');
            localStorage.removeItem('checkout');
          } }
        >
          SAIR
          <img src={ Logout } alt="logout" className="svg-logout" />
        </NavLink>
      </div>
    </header>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;

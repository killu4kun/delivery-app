import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logout from '../images/logout.svg';
import '../styles/Nav.css';

const Nav = ({ titlePage }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <div className="box-nav">
        <NavLink
          to="/customer/products"
          className={ titlePage === 'Produtos' ? 'nav-link-active' : 'nav-link' }
        >
          Produtos
        </NavLink>
        <NavLink
          to="/customer/orders"
          className={ titlePage === 'Pedidos' ? 'nav-link-active' : 'nav-link' }
        >
          Meus Pedidos
        </NavLink>
      </div>
      <div className="box-nav">
        <div className="nav-link-user">{ user.name }</div>
        <NavLink
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <header>
      <NavLink to="/customer/products">Produtos</NavLink>
      <NavLink to="/">Meus Pedidos</NavLink>
      <div>{ user.name }</div>
      <NavLink
        to="/login"
        onClick={ () => localStorage.removeItem('user') }
      >
        SAIR
      </NavLink>
    </header>
  );
};

export default Nav;

import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MyContext } from '../context/Provider';
import '../styles/login.css';
import { requestUser } from '../utils/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const emailValidation = regex.test(email);

    const SIX = 6;
    const passwordValidation = password.length >= SIX;

    if (emailValidation && passwordValidation) setDisabled(false);
    if (!emailValidation || !passwordValidation) setDisabled(true);
  }, [email, password]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role === 'administrator') history.push('/admin/manage');
      if (user.role === 'seller') history.push('/seller/orders');
      if (user.role === 'customer') history.push('/customer/products');
    }
  }, []);

  const { setUserEmail, setUserPassword, setUsername, setToken } = useContext(MyContext);

  const validateUser = async () => {
    try {
      setError('');
      const user = await requestUser(email, password);
      if (user.error) throw Error(user.error);
      setUserEmail(email);
      setUserPassword(password);
      setUsername(user.name);
      setToken(user.token);
      const userToSave = JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: user.token,
      });
      localStorage.setItem('user', userToSave);
      if (user.role === 'administrator') history.push('/admin/manage');
      if (user.role === 'seller') history.push('/seller/orders');
      if (user.role === 'customer') history.push('/customer/products');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="div-login">
      <h1 className="logo">GRUPO 11</h1>
      <div className="container-login">
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
            type="email"
            placeholder="email@trybeer.com.br"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            placeholder="*******"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          className="button-login"
          type="button"
          disabled={ disabled }
          onClick={ () => validateUser() }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          className="button-register"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda nao tenho conta
        </button>
      </div>
      <footer
        hidden={ error === '' }
        data-testid="common_login__element-invalid-email"
      >
        {error}
      </footer>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import registerAPI from '../services/register-api';
import utils from '../validationRegister';

const Register = ({ history }) => {
  const namePage = 'Cadastro';
  const [nameValue, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [error, setError] = useState({ error: false, message: '' });

  const handleChangeName = ({ target: { value } }) => {
    console.log(value);
    setName(value);
    const nameVal = utils.verifyForm('name', value);
    const emailVal = utils.verifyForm('email', email);
    const passVal = utils.verifyForm('password', password);
    if (nameVal.error) {
      setError(nameVal);
      setButtonDisabled(true);
      return;
    }
    console.log(nameVal);
    if (!nameVal.error && !emailVal.error && !passVal.error) { setButtonDisabled(false); }
    setError({ error: false, message: '' });
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
    const nameVal = utils.verifyForm('name', nameValue);
    const emailVal = utils.verifyForm('email', value);
    const passVal = utils.verifyForm('password', password);

    if (emailVal.error) {
      setError(emailVal);
      setButtonDisabled(true);
      return;
    }
    if (!nameVal.error && !emailVal.error && !passVal.error) {
      setButtonDisabled(false);
    }
    setError({ error: false, message: '' });
  };

  const handleChangePassword = ({ target: { value } }) => {
    const namev = utils.verifyForm('name', nameValue);
    const emailv = utils.verifyForm('email', email);
    const passv = utils.verifyForm('password', value);
    setPassword(value);
    if (passv.error) {
      setError(passv);
      setButtonDisabled(true);
      return;
    }
    if (!namev.error && !emailv.error && !passv.error) {
      setButtonDisabled(false);
    }
    setError({ error: false, message: '' });
  };

  const submitRegister = async () => {
    try {
      const register = await registerAPI({ name: nameValue, email, value });
      localStorage.setItem('user', JSON.stringify(register));
      history.push('/customer/products');
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };

  return (
    <>
      <h1>{ namePage }</h1>
      <form>
        <div>
          <input
            name="name"
            value={ nameValue }
            minLength="12"
            data-testid="common_register_input-name"
            type="text"
            placeholder="Nome"
            onChange={ handleChangeName }
            style={ { marginBottom: '10px ' } }
          />
        </div>
        <div>
          <input
            name="email"
            value={ email }
            onChange={ handleChangeEmail }
            data-testid="common_register_input-email"
            type="email"
            placeholder="Eamil"
            style={ { marginBottom: '10px ' } }
          />
        </div>
        <div>
          <input
            name="password"
            value={ password }
            data-testid="common_register_input-password"
            onChange={ handleChangePassword }
            type="password"
            placeholder="Senha"
            style={ { marginBottom: '10px ' } }
          />
        </div>

        <p
          data-testid="common_register__element-invalid_register"
        >
          { error.error && error.message }
        </p>

        <button
          type="button"
          disabled={ buttonDisabled }
          onClick={ submitRegister }
        >
          Cadastrar
        </button>
      </form>
    </>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;

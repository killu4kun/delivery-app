import React, { useEffect, useState } from 'react';
import { createUser, setToken } from '../../services/requests';
import { validateData } from '../../utils/requests';

const roles = [
  { seller: 'Vendedor' },
  { administrator: 'Administrador' },
  { customer: 'Cliente' },
];
export default function FormsRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);
  const [selectRole, setSelectRole] = useState(
    Object.keys(roles[2]).toString(),
  );

  const handleRegister = async () => {
    const { token } = user;
    const payloadRegister = {
      name,
      email,
      password,
      role: selectRole,
    };

    const endpoint = '/users/admin';
    setToken(token);
    const userCreated = await createUser(endpoint, payloadRegister);

    if (!userCreated) {
      setName('');
      setEmail('');
      setPassword('');
      return setError(true);
    }

    window.location.reload();
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          data-testid="admin_manage__input-name"
          name="name"
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid="admin_manage__input-email"
          name="email"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="admin_manage__input-password"
          name="email"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <select
        data-testid="admin_manage__select-role"
        value={ selectRole }
        onChange={ ({ target }) => setSelectRole(target.value) }
      >
        {roles.map((role, index) => (
          <option value={ Object.keys(role) } key={ index }>
            {Object.values(role)}
          </option>
        ))}
      </select>
      <button
        data-testid="admin_manage__button-register"
        type="button"
        disabled={ validateData(name, email, password) }
        onClick={ handleRegister }
      >
        CADASTRAR
      </button>
      <p hidden={ !error } data-testid="admin_manage__element-invalid-register">
        Erro ao cadastrar
      </p>
    </form>
  );
}

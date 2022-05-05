// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const minLimitName = 12;
const minLimitPassword = 6;

const verifyForm = (input, value) => {
  switch (input) {
  case 'name': {
    if (value.length < minLimitName) {
      return { error: true, message: 'O nome não pode ser menor que 12 caracteres' };
    }

    return { error: false, message: '' };
  }
  case 'email': {
    const result = validateEmail(value);
    if (!result) return { error: true, message: 'Email com formato inválido' };
    return { error: false, message: '' };
  }
  case 'password': {
    if (value.length < minLimitPassword) {
      return { error: true, message: 'A senha tem que ter no mínimo 6 caracteres' };
    }
    return { error: false, message: '' };
  }
  default:
    return true;
  }
};

module.exports = {
  verifyForm,
};

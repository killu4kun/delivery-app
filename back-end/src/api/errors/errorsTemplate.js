const generateError = require('../utilities/generateError');

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const INTERNAL_SERVER_ERROR = 500;

const capitalizeInitial = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {
  idNotFound: (target) => generateError({
    message: `${capitalizeInitial(target)} not found through provided id.`,
    status: NOT_FOUND,
  }),

  notFound: (target) => generateError({
    message: `There are no ${target} registered.`,
    status: NOT_FOUND,
  }),

  requiredInteger: (target) => generateError({
    message: `${target} was not provided or is not an integer.`,
    status: BAD_REQUEST,
  }),

  invalidInteger: (target) => generateError({
    message: `${target} is not an integer.`,
    status: BAD_REQUEST,
  }),

  requiredString: (target, min, max) => generateError({
    message: `${target} was not provided or is not a string between ${min} and ${max} characters.`,
    status: BAD_REQUEST,
  }),

  invalidString: (target, min, max) => generateError({
    message: `${target} is not a string between ${min} and ${max} characters.`,
    status: BAD_REQUEST,
  }),

  requiredDate: (target) => generateError({
    message: `${target} was not provided or does not match the date pattern.`,
    status: BAD_REQUEST,
  }),

  invalidDate: (target) => generateError({
    message: `${target} does not match the date pattern.`,
    status: BAD_REQUEST,
  }),

  requiredCurrency: (target) => generateError({
    message: `${target} was not provided or does not follow the currency pattern.`,
    status: BAD_REQUEST,
  }),

  invalidCurrency: (target) => generateError({
    message: `${target} does not follow the currency pattern.`,
    status: BAD_REQUEST,
  }),

  requiredEmail: generateError({
    message: 'email was not provided or does not follow the email pattern.',
    status: BAD_REQUEST,
  }),

  wrongPassword: generateError({
    message: 'Provided password does not match the database.',
    status: FORBIDDEN,
  }),

  missingToken: generateError({
    message: 'Token was not provided.',
    status: UNAUTHORIZED,
  }),

  invalidToken: generateError({
    message: 'Provided token is expired or invalid.',
    status: UNAUTHORIZED,
  }),

  cannotDuplicate: (target) => generateError({
    message: `${target} already exists.`,
    status: CONFLICT,
  }),

  internalServerError: generateError({
    message: 'Internal server error.',
    status: INTERNAL_SERVER_ERROR,
  }),

  permissionDenied: generateError({
    message: 'Current user does not have access to this resource.',
    status: FORBIDDEN,
  }),
};
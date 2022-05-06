const generateError = require('../utilities/generateError');

const userNotFound = generateError('User not found by userId.', 400);

const sellerNotFound = generateError('Seller not found by sellerId.', 400);

const userIdIsRequired = generateError('userId is required or is invalid.', 400);

const sellerIdIsRequired = generateError(
  'sellerId is required or is invalid.',
  400,
);

const totalPriceIsRequired = generateError(
  'totalPrice is required or is invalid.',
  400,
);

const deliveryAddressIsRequired = generateError(
  'deliveryAddress is required or is invalid.',
  400,
);

const deliveryNumberIsRequired = generateError(
  'deliveryNumber is required or is invalid.',
  400,
);

const saleDateIsRequired = generateError(
  'saleDate is required or is invalid.',
  400,
);

const statusIsRequired = generateError('status is required or is invalid.', 400);

const userIdIsInvalid = generateError('userId is invalid.', 400);

const sellerIdIsInvalid = generateError(
  'sellerId is invalid.',
  400,
);

const totalPriceIsInvalid = generateError(
  'totalPrice is invalid.',
  400,
);

const deliveryAddressIsInvalid = generateError(
  'deliveryAddress is invalid.',
  400,
);

const deliveryNumberIsInvalid = generateError(
  'deliveryNumber is invalid.',
  400,
);

const saleDateIsInvalid = generateError(
  'saleDate is invalid.',
  400,
);

const statusIsInvalid = generateError('status is invalid.', 400);

module.exports = {
  userNotFound,
  sellerNotFound,
  userIdIsRequired,
  sellerIdIsRequired,
  totalPriceIsRequired,
  deliveryAddressIsRequired,
  deliveryNumberIsRequired,
  saleDateIsRequired,
  statusIsRequired,
  userIdIsInvalid,
  sellerIdIsInvalid,
  totalPriceIsInvalid,
  deliveryAddressIsInvalid,
  deliveryNumberIsInvalid,
  saleDateIsInvalid,
  statusIsInvalid,
};

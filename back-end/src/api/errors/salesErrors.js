const generateError = require('../utilities/generateError');

const noSales = generateError('There are no registered sales.', 404);

const saleNotFound = generateError('Sale not found', 404);

module.exports = { noSales, saleNotFound };

const generateError = require('../utilities/generateError');

const productNotFound = generateError('Product not found', 404);

module.exports = { productNotFound };

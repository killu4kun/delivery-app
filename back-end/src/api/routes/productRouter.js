const router = require('express').Router();
const { getAllProducts, getProductsById } = require('../controllers/Products');

router.get('/', getAllProducts);

router.get('/:id', getProductsById);

module.exports = router;

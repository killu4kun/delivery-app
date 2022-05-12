const { Router } = require('express');
const readSalesController = require('../controllers/readSalesController');
const readOneSalesController = require('../controllers/readOneSalesController');
const createSalesController = require('../controllers/createSalesController');
const salesValidation = require('../middlewares/salesValidation');
const salesUpdateValidation = require('../middlewares/salesUpdateValidation');
const updateSalesController = require('../controllers/updateSalesController');
const deleteSalesController = require('../controllers/deleteSalesController');
const getUserBuysByName = require('../controllers/readSalesByUsername');
const getSellerSalesByName = require('../controllers/readSalesByUsername');

const router = Router();

router
  .route('/')
  .get(readSalesController)
  .post(salesValidation, createSalesController);

router
  .route('/:id')
  .get(readOneSalesController)
  .put(salesUpdateValidation, updateSalesController)
  .delete(deleteSalesController);

router
.route('/user/:name')
.get(getUserBuysByName);

router
.route('/seller/:name')
.get(getSellerSalesByName);

module.exports = router;

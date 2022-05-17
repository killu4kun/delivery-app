const { Router } = require('express');
const readSalesController = require('../controllers/readSalesController');
const readOneSalesController = require('../controllers/readOneSalesController');
const createSalesController = require('../controllers/createSalesController');
const salesValidation = require('../middlewares/salesValidation');
const salesUpdateValidation = require('../middlewares/salesUpdateValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const updateSalesController = require('../controllers/updateSalesController');
const deleteSalesController = require('../controllers/deleteSalesController');
const getUserBuysByName = require('../controllers/readSalesByUsername');
const getSellerSalesByName = require('../controllers/readSalesByUsername');
const readSalesByUserId = require('../controllers/readSalesByUserId');


const router = Router();

router
  .route('/')
  .get(readSalesController)
  .post(tokenValidation, salesValidation, createSalesController);

router
  .route('/:id')
  .get(readOneSalesController)
  .put(salesUpdateValidation, updateSalesController)
  .delete(deleteSalesController);

router
  .route('/userid/:id')
  .get(readSalesByUserId);

router
.route('/user/:name')
.get(getUserBuysByName);


router
.route('/seller/:name')
.get(getSellerSalesByName);

module.exports = router;

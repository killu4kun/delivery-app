const { Router } = require('express');
const readSalesController = require('../controllers/readSalesController');
const readOneSalesController = require('../controllers/readOneSalesController');
const createSalesController = require('../controllers/createSalesController');
const salesValidation = require('../middleware/salesValidation');
const salesUpdateValidation = require('../middleware/salesUpdateValidation');
const updateSalesController = require('../controllers/updateSalesController');
const deleteSalesController = require('../controllers/deleteSalesController');

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

module.exports = router;

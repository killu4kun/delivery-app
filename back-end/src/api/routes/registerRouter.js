const router = require('express').Router();
const registerController = require('../controllers/registerController');
const registerValidation = require('../middlewares/registerValidation');

router.post('/', registerValidation, registerController);

module.exports = router;
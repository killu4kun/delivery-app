const router = require('express').Router();
const loginController = require('../controllers/loginController');
const loginValidation = require('../middleware/loginValidation');

router.post('/', loginValidation, loginController);

module.exports = router;
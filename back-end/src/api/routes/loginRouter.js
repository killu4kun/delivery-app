const router = require('express').Router();
const loginController = require('../controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');

router.post('/', loginValidation, loginController);

module.exports = router;
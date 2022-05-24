const router = require('express').Router();
const { getUserId, getAllUser } = require('../controllers/UserController');

router.get('/', getAllUser);

router.get('/:id', getUserId);

module.exports = router;

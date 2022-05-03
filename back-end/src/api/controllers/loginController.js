const rescue = require('express-rescue');
const generateToken = require('../utilities/generateToken');
const { successResponse } = require('../utilities/generateResponse');

module.exports = [
  rescue(async (req, res) => {
    const { email, password } = req.body;
    const { name, role } = res.locals.user;
    const token = await generateToken(email, password);
    const json = { name, email, role, token };
    successResponse(res, 'ok', json);
  }),
];
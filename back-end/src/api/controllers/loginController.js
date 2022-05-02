const rescue = require('express-rescue');
const generateToken = require('../utilities/generateToken');
const { successResponse } = require('../utilities/generateResponse');

module.exports = [
  rescue(async (_req, res) => {
    const { name, email, role } = res.locals.user;
    const token = generateToken(email);
    const json = { name, email, role, token };
    successResponse(res, 'login', json);
  }),
];
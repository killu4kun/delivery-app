const rescue = require('express-rescue');
const usersService = require('../services/usersService');

module.exports = [
  rescue(async (req, res) => {
    const newUser = req.body;
    const responseBody = await usersService.createUser(newUser);
    res.status(201).json(responseBody);
  }),
];
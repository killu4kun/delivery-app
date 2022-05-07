const rescue = require('express-rescue');
const usersService = require('../services/usersService');

module.exports = [
  rescue(async (req, res) => {
    const newUser = req.body;
    newUser.role = newUser.role || 'customer';
    const body = await usersService.createUser(newUser);
    res.status(201).json(body);
  }),
];
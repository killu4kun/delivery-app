const rescue = require('express-rescue');
const UserService = require('../services/usersService');

module.exports = {
  getUserId: rescue(async (req, res) => {
    const { id } = req.params;
    const response = await UserService.getUserById(id);
    return res.status(201).json(response);
  }),
  getAllUser: rescue(async (_req, res) => {
    const response = await UserService.getUserAll();
    return res.status(201).json(response);
  }),
};

const rescue = require('express-rescue');
const SalesService = require('../services/salesService');

module.exports = [
  rescue(async (req, res) => {
    const response = await SalesService.create(req.body);
    return res.status(201).json(response);
  }),
];

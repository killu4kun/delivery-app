const rescue = require('express-rescue');
const SalesService = require('../services/salesService');

module.exports = [
  rescue(async (_req, res) => {
    const response = await SalesService.read();
    return res.status(200).json(response);
  }),
];

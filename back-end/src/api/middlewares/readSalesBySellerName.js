const rescue = require('express-rescue');
const SalesService = require('../services/salesService');

module.exports = [
  rescue(async (req, res) => {
    const { name } = req.body;
    const userSales = await SalesService.getUserSalesByName(name);
    return res.status(200).json(userSales);
  }),
];

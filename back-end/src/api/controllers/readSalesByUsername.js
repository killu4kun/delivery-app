const rescue = require('express-rescue');
const SalesService = require('../services/salesService');

module.exports = [
  rescue(async (req, res) => {
    const { name } = req.params;
    const sellerSales = await SalesService.getSellerSalesByName(name);
    return res.status(200).json(sellerSales);
  }),
];

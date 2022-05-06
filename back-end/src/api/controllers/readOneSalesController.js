const rescue = require('express-rescue');
const SalesService = require('../services/salesService');

module.exports = [
  rescue(async (req, res) => {
    const { id } = req.params;
    const response = await SalesService.readOne(id);
    return res.status(200).json(response);
  }),
];

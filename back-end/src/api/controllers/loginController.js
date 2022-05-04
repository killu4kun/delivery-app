const rescue = require('express-rescue');
const generateToken = require('../utilities/generateToken');

module.exports = [
  rescue(async (req, res) => {
    const { email, password } = req.body;
    const { name, role } = res.locals.user;
    const token = await generateToken(email, password);
    const json = { name, email, role, token };
    res.status(200).json(json);
  }),
];
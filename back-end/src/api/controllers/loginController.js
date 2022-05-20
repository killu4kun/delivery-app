const rescue = require('express-rescue');
const generateToken = require('../utilities/generateToken');

module.exports = [
  rescue(async (req, res) => {
    const { email, password } = req.body;
    const { id, name, role } = res.locals.user;
    const token = await generateToken(email, password, role);
    console.log(id);
    const body = { id, name, email, role, token };
    res.status(200).json(body);
  }),
];
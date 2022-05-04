module.exports = (err, _req, res, _next) => {
  const code = err.code || 500;
  const error = err.message || 'Internal server error';
  res.status(code).json({ error });
};
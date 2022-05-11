const app = require('express')();
const express = require('express');
const bodyParser = require('body-parser').json();
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const productRouter = require('./routes/productRouter');
const salesRouter = require('./routes/salesRouter');
const registerRouter = require('./routes/registerRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(bodyParser);
app.use(cors());

app.use(express.static('public'));

app.use('/login', loginRouter);
app.use('/sales', salesRouter);
app.use('/register', registerRouter);

app.use('/products', productRouter);

app.use(errorMiddleware);

module.exports = app;

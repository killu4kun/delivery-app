const app = require('express')();
const bodyParser = require('body-parser').json();
const loginRouter = require('./routes/loginRouter');
const productRouter = require('./routes/productRouter');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(bodyParser);

app.use('/login', loginRouter);

app.use('/products', productRouter);

app.use(errorMiddleware);

module.exports = app;
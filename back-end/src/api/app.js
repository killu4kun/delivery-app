const app = require('express')();
const bodyParser = require('body-parser').json();
const loginRouter = require('./routes/loginRouter');
const salesRouter = require('./routes/salesRouter');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(bodyParser);

app.use('/login', loginRouter);
app.use('/sales', salesRouter);

app.use(errorMiddleware);

module.exports = app;

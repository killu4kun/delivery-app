const app = require('express')();
const bodyParser = require('body-parser').json();
const loginRouter = require('./routes/loginRouter');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(bodyParser);

app.use('/login', loginRouter);

app.use(errorMiddleware);

module.exports = app;
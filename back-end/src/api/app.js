const app = require('express')();
const bodyParser = require('body-parser').json();
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const salesRouter = require('./routes/salesRouter');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(bodyParser);
app.use(cors());

app.use('/login', loginRouter);
app.use('/sales', salesRouter);

app.use(errorMiddleware);

module.exports = app;

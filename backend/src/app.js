const express = require('express');
require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');
const authController = require('./controllers/authController')
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const morgan = require('morgan');
const settingsRouter = require('./routers/settingsRouter');
const symbolsRouter = require('./routers/symbolsRouter');
const exchangeRouter = require('./routers/exchangeRouter');

const app = express();

//configuring middewares
app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(helmet());
app.use(express.json());

app.use(morgan('dev'));


app.use('/settings', authMiddleware, settingsRouter);
app.use('/symbols', authMiddleware, symbolsRouter);
app.use('/exchange', authMiddleware, exchangeRouter);

app.post('/login', authController.doLogin);
app.post('/logout', authController.doLogout);

app.use(errorMiddleware);

module.exports = app;
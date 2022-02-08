const express = require('express');
require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');
const authController = require('./controllers/authController')
const settings = require('./controllers/settingsController')
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const morgan = require('morgan');

const app = express();

//configuring middewares
app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(helmet());
app.use(express.json());

app.use(morgan('dev'));

app.post('/login', authController.doLogin);

app.get('/settings', authMiddleware, settings.getSettings);
app.patch('/settings', authMiddleware, settings.updateSettings);

app.post('/logout', authController.doLogout);

app.use(errorMiddleware);

module.exports = app;
const express = require('express');
require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');
const authController = require('./controllers/authController')
const settings = require('./controllers/settingsController')
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

//configuring middewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.post('/login', authController.doLogin);

app.get('/settings', authMiddleware, settings.getSettings);

app.post('/logout', authController.doLogout);

app.use(errorMiddleware);

module.exports = app;
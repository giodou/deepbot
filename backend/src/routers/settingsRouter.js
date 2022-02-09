const express = require('express');
const router = express.Router();
const settings = require('../controllers/settingsController')

router.get('/', settings.getSettings);
router.patch('/', settings.updateSettings);

module.exports = router;
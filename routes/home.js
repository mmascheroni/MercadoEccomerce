const express = require('express');
const homeController = require('../controllers/homeController.js');

const router = express.Router();

router.get('/', homeController.home);

module.exports = router;

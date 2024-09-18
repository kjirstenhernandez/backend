const express = require('express');
const mainController = require('../controllers/mainController');
const routes = express.Router();

routes.get('/', mainController.getInfo);

module.exports = routes;

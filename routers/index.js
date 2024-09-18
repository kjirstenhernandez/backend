const routes = require('express').Router();
const controller = require('../controllers/mainController')

routes.get('/', controller.getInfo);

module.exports = routes;

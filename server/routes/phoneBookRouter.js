const express = require('express');
const phoneBookController = require('../controllers/phoneBookController');

const route = new express.Router();

route.get('/', phoneBookController.getAll);
route.post('/', phoneBookController.create);
route.patch('/:id', phoneBookController.update);
route.delete('/:id', phoneBookController.remove);

module.exports = route;

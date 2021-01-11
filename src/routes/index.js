const routes = require('express').Router()

const StudentController = require('../app/controllers/StudentController')

// Student routes
routes.get('/student/', StudentController.index);
routes.get('/student/:id', StudentController.get);
routes.put('/student/:id', StudentController.update);
routes.post('/student/', StudentController.store);
routes.delete('/student/:id', StudentController.destroy);

module.exports = routes;

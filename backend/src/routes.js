const { Router } = require('express');
const UsersController = require('./controllers/UsersController');

const router = Router();

// Rotas de CRUD de usuário
router.get('/users', UsersController.index);
router.get('/users/:id', UsersController.show);
router.post('/users', UsersController.store);
router.put('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.delete);

module.exports = router;




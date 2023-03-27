const { Router } = require('express');
const ControllerUsers = require('./controllers/UsersControllers');

const router = Router();

// Rotas de CRUD de usuário
router.get('/users', ControllerUsers.index);
router.get('/users/:id', ControllerUsers.show);
router.post('/users', ControllerUsers.store);
router.put('/users/:id', ControllerUsers.update);
router.delete('/users/:id', ControllerUsers.delete);

module.exports = router;

import { Router } from 'express';
import ControllerUsers from './controllers/UsersControllers.js';

const router = Router();

// Rotas para CRUD do usuário
router.get('/users', ControllerUsers.index);
router.get('/users/:id', ControllerUsers.show);
router.post('/users', ControllerUsers.store);
router.put('/users/:id', ControllerUsers.update);
router.delete('/users/:id', ControllerUsers.delete);

export { router };

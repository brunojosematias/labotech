import { Router } from 'express';
import ControllerUsers from './controllers/UsersControllers.js';

const router = Router();

router.get('/users', ControllerUsers.index);
router.post('/users', ControllerUsers.store);

export { router };

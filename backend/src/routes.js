import { Router } from 'express';
import ControllerUsers from './controllers/UsersControllers.js';

const router = Router();

router.get('/users', ControllerUsers.index);

export { router };

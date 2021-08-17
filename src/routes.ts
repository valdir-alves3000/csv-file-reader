import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { ListUsersController } from './controllers/ListUsersController';
import { CountUsersController } from './controllers/CountUsersController';

import multer from 'multer';

const multerConfig = multer();
const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const countUsersController = new CountUsersController();

router.post(
  '/users',
  multerConfig.single('file'),
  createUserController.handle
);

router.get('/users', listUsersController.handle);
router.get('/count-users', countUsersController.handle);

export { router };
import { Router } from 'express';

import { CreateQuestionsController } from './controllers/CreateQuestionsController';
import { ListQuestionsController } from './controllers/ListQuestionsController';
import { CountQuestionsController } from './controllers/CountQuestionsController';

import { CreateUsersController } from './controllers/CreateUsersController';
import { ListUsersController } from './controllers/ListUsersController';
import { CountUsersController } from './controllers/CountUsersController';

import multer from 'multer';

const multerConfig = multer();
const router = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const countUsersController = new CountUsersController();

const createQuestionsController = new CreateQuestionsController();
const listQuestionsController = new ListQuestionsController();
const countQuestionsController = new CountQuestionsController();

router.post(
  '/users',
  multerConfig.single('file'),
  createUsersController.handle
);

router.get('/users', listUsersController.handle);
router.get('/count-users', countUsersController.handle);

router.get('/questions', listQuestionsController.handle);
router.get('/count-questions', countQuestionsController.handle);
router.post(
  '/questions',
  multerConfig.single('file'),
  createQuestionsController.handle
);


export { router };
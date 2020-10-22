import { Router } from 'express';
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import DisciplineController from './app/controllers/DisciplineController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/discipline', DisciplineController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/resetpassword', SessionController.resetPassword);

routes.use(authMiddleware);

routes.get('/users/:id', UserController.index);
routes.get('/users/', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);







export default routes;

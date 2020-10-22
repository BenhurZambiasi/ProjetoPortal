import { Router } from 'express';
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/adm', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/resetpassword', SessionController.resetPassword);

routes.use(authMiddleware);

routes.get('/adm/:id', UserController.index);
routes.get('/adm/', UserController.index);
routes.put('/adm/:id', UserController.update);
routes.delete('/adm/:id', UserController.delete);







export default routes;

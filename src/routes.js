import { Router } from 'express';
import AdmController from './app/controllers/AdmController'
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/adm', AdmController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/forgot', SessionController.forgotPassword);
routes.post('/sessions/resetpassword', SessionController.resetPassword);

routes.use(authMiddleware);

routes.get('/adm/:id', AdmController.index);
routes.get('/adm/', AdmController.index);
routes.put('/adm/:id', AdmController.update);
routes.delete('/adm/:id', AdmController.delete);







export default routes;

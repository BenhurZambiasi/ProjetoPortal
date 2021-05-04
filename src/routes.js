import { Router } from 'express';
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import DisciplineController from './app/controllers/DisciplineController';
import ContentController from './app/controllers/ContentController';
import RegistrationController from './app/controllers/RegistrationController';
import NotaController from './app/controllers/NotaController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/sessions/adm', SessionController.loginAdm);
routes.post('/sessions/teacher', SessionController.loginTeacher);
routes.post('/sessions/resetpassword', SessionController.resetPassword);



routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.index);
routes.get('/users/', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/discipline', DisciplineController.store);
routes.get('/discipline/:id', DisciplineController.lista);
routes.get('/discipline/:idUser/:usertype', DisciplineController.index);



routes.post('/nota/:idDisciplina', NotaController.store);

routes.post('/content/:id', ContentController.store);
routes.get('/content/', ContentController.index);
routes.get('/content/:id', ContentController.index);

routes.post('/registration/:cpf', RegistrationController.store);
routes.use(authMiddleware);











export default routes;

import { Router } from 'express';
import consultController from '../controllers/consultController.js';

const consultRouter = Router();

consultRouter.post('/consult-cep', consultController.consult);

export default consultRouter;
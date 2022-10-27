import { Router } from 'express';
import consultController from '../controllers/consultController.js';
import cepValidation from '../middlewares/cepValidation.js';

const consultRouter = Router();

consultRouter.post('/consult-cep', cepValidation.validateInput, consultController.consult);

export default consultRouter;
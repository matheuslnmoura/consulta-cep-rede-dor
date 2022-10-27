import { Router } from 'express';
import consultRouter from './consultRouter.js';


const router = Router();

router.use(consultRouter);

export default router;
import { Request, Response } from 'express';
import consultService from '../services/consultService.js';

const consultController = {
  consult
};

export default consultController;

async function consult(req: Request, res: Response) {
  const {cep} = req.body;
  const response = await consultService.getCepInfo(cep);
  res.status(200).send(response);
}
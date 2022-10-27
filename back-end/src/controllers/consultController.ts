import { Request, Response } from 'express';

const consultController = {
  consult
};

export default consultController;

async function consult(req: Request, res: Response) {
  const cep = req.body;
  res.status(200).send(cep);
}
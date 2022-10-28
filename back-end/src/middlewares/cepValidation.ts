import Joi from 'joi';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const cepValidation = {
  validateInput
};

export default cepValidation;

export const cepPattern = /(?:^|\W)[0-9]{5}-?[0-9]{3}(?:$|\W)/;

function validateInput(req: Request, res: Response, next: NextFunction) {
  const treatedCep = req.body.cep.toString();
  const cep = {cep: treatedCep};
  const cepSchema = Joi.object({
    cep: Joi.string().regex(cepPattern)
  });

  const { error } = cepSchema.validate(cep, {abortEarly: false});

  if( error ) {
    console.log(chalk.bold.red(error));
    throw{code: 400, message: 'O CEP informado é inválido.'};
  }
  res.locals.user = cep;
  next();
}
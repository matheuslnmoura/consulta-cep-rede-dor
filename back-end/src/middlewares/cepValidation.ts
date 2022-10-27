import Joi from 'joi';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const cepValidation = {
  validateInput
};

export default cepValidation;

const cepPattern = /(?:^|\W)[0-9]{5}-?[0-9]{3}(?:$|\W)/;

function validateInput(req: Request, res: Response, next: NextFunction) {
  const cep = req.body;
  const cepSchema = Joi.object({
    cep: Joi.string().regex(cepPattern)
  });

  const { error } = cepSchema.validate(cep, {abortEarly: false});

  if( error ) {
    console.log(chalk.bold.red(error));
    throw{code: 400, message: 'O CEP informado é inválido.'};
  }
  next();
}
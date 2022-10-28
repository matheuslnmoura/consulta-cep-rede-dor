import app from '../../src/app';
import supertest from 'supertest';
import {faker} from '@faker-js/faker';
import { cepPattern } from '../../src/middlewares/cepValidation';

const CEP_PATTERN_WITH_DASH = '99999-999';
const CEP_PATTERN_WITHOUT_DASH = '99999999';
const agent = supertest(app);

describe('POST/consult-cep', () => {
  it('Given an object {cep: VALUE} with VALUE of an existing CEP number with the format 99999-999, should return an object containing the \'code\' property which value is equal to the given CEP number', async () => {
    const cep = '20775-181';
    const response = await agent.post('/consult-cep').send({cep});
    
    expect(response.body.code).toBe(cep);
  });

  it('Given an object {cep: VALUE} with VALUE of an existing CEP number with the format 99999999, should return an object containing the \'code\' property which value is equal to the given CEP number with a dash after the fifth number', async () => {
    const cep = '20775181';
    const response = await agent.post('/consult-cep').send({cep});
    const cepResponse = response.body.code;
    const cepArr = cepResponse.split('-');
    const newCepResponse = cepArr.join('');

    expect (newCepResponse).toBe(cep);

  });

  it('Given a random numeric input with length greater than CEP_PATTERN_WITHOUT_DASH.length, should return code 400', async () => {
    const cep = faker.random.numeric(CEP_PATTERN_WITHOUT_DASH.length + 1);
    const response = await agent.post('/consult-cep').send({cep});

    expect(response.status).toBe(400);
  });

  it('Given a random numeric input with length lower than CEP_PATTERN_WITHOUT_DASH.length, should return code 400', async () => {
    const cep = faker.random.numeric(CEP_PATTERN_WITHOUT_DASH.length - 1);
    const response = await agent.post('/consult-cep').send({cep});

    expect(response.status).toBe(400);
  });

  it('Given a random alphanumeric input with length that matches CEP_PATTERN_WITH_DASH.length, should return code 400', async () => {
    function createRandomAlphanumeric(length: number) {
      return faker.random.alphaNumeric(length);
    }
    let cep = createRandomAlphanumeric(CEP_PATTERN_WITH_DASH.length);
    console.log(cep);
    if(cepPattern.test(cep)) { // In case the randomAlphanumeric surprisingly matches the cep regex
      console.log('it matched');
      cep = createRandomAlphanumeric(CEP_PATTERN_WITH_DASH.length + 1);
      console.log(cep);
    }
    const response = await agent.post('/consult-cep').send({cep});

    expect(response.status).toBe(400);
  });

  it('Given a number that matches the pattern and ends up being a valid CEP number, should return status 200', async () => {
    const cep = 20775181;
    const response = await agent.post('/consult-cep').send({cep});
    
    expect(response.status).toBe(200);
  });

});
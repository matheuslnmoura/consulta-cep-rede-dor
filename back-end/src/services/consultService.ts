import axios from 'axios';

const consultService = {
  getCepInfo
};

export default consultService;

async function getCepInfo(cep: string) {
  // const API_URL = `https://ws.apicep.com/cep.json?code=${cep}`;
  const API_URL = `https://viacep.com.br/ws/${cep}/json/`;
  const {data: response} = await axios({
    method: 'get',
    url: API_URL,
    timeout: 5000
  });
  if(API_URL.includes('viacep')) {
    if(response.erro) {
      console.log('entrou no if');
      throw {code: 404, message: 'CEP não encontrado.'};
    } 
    console.log('My purpose of existence is to check if pull request workflow is working');
    return {
      status: 200,
      ok: true,
      code: response.cep,
      state: response.uf,
      city: response.localidade,
      district: response.bairro,
      address: `${response.logradouro} - ${response.complemento}`,
      statusText: 'ok',
    };
  }
  return response;
  
}
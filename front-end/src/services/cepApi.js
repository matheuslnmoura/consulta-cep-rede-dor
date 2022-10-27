import api from './api';

const wsApiCep = async(cep) => {
  try {
    const response = await api.post('/consult-cep', {cep});
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};

const cepApi = {
  wsApiCep
};

export default cepApi;
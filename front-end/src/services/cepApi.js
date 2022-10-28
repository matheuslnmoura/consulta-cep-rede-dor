import api from './api';

const wsApiCep = async(cep) => {
  try {
    const response = await api.post('/consult-cep', {cep});
    return response.data;
    
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data
    };
  }
};

const cepApi = {
  wsApiCep
};

export default cepApi;
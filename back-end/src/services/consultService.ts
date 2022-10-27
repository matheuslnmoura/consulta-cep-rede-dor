import axios from 'axios';

const consultService = {
  getCepInfo
};

export default consultService;

async function getCepInfo(cep: string) {
  try {
    const {data: response} = await axios({
      method: 'get',
      // url: `https://viacep.com.br/ws/${cep}/json/`,
      url: `https://ws.apicep.com/cep.json?code=${cep}`,
      timeout: 15000
    });
    if(response.status !== 200) {
      throw {code: response.status, message: response.message};
    }
    return response;
    
  } catch (error) {
    console.log('deu xabu');
    console.log(error);
    return error;
    if(error.message.includes('timeout')) {
      throw {code: 500, message: 'O servidor demorou para responder. Tente novamente.'};
    }
  }
}
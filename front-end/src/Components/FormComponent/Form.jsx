import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import * as S from './fromStyle';
import cepApi from '../../services/cepApi';
import CepInfoContext from '../../contexts/CepInfoContext';

const Form = () => {
  const {setCepInfo} = useContext(CepInfoContext);
  const [isNotLoading, setIsNotLoading] = useState(true);

  const [cepValue, setCepValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsNotLoading(false);
    const response = await cepApi.wsApiCep(cepValue);
    setCepInfo({...response});
    setIsNotLoading(true);
  };

  const CEP_PATTERN = '00000-000';

  return(
    <S.Form onSubmit={handleSubmit}>
      <IMaskInput 
        mask = {CEP_PATTERN}
        placeholder = 'Digite o cep'
        type = 'text' 
        name = 'cep' 
        value = {cepValue}
        onChange = {event => setCepValue(event.target.value)}
      />
      
      <button 
        type = 'submit' 
        disabled = {cepValue.length === CEP_PATTERN.length && isNotLoading? false : true} 
      >
        {
          !isNotLoading? <ThreeDots width = '40px' height = '40px' color = 'rgba(255, 255, 255, 0.87)' />
            :
            'Enviar'
        }
      
      </button>
      <div className='button-block'></div>
    </S.Form>
  );
};

export default Form;
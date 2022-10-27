import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useContext } from 'react';
import * as S from './fromStyle';
import cepApi from '../../services/cepApi';
import CepInfoContext from '../../contexts/CepInfoContext';

const Form = () => {
  const {setCepInfo} = useContext(CepInfoContext);

  const [cepValue, setCepValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await cepApi.wsApiCep(cepValue);
    setCepInfo({...response});
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
      
      <button type = 'submit' disabled = {cepValue.length === CEP_PATTERN.length ? false : true} >Enviar</button>
    </S.Form>
  );
};

export default Form;
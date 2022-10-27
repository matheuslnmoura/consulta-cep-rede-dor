import React, { useContext } from 'react';
import CepInfoContext from '../../contexts/CepInfoContext';
import * as S from './CepInfoStyle';

const CepInfo = () => {
  const {cepInfo} = useContext(CepInfoContext);
  const {address, district, city, state, } = cepInfo;
  return(
    <S.UnorderedList>
      <li>{address}</li>
      <li>Bairro: {district}</li>
      <li>Cidade: {city}</li>
      <li>Estado: {state}</li>
    </S.UnorderedList>
  );
};

export default CepInfo;
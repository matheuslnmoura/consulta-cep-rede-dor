import React, { useContext } from 'react';
import CepInfoContext from '../../contexts/CepInfoContext';
import * as S from './CepInfoStyle';

const CepInfo = () => {
  const {cepValue, cepInfo} = useContext(CepInfoContext);
  const {address, district, city, state, code } = cepInfo;
  return(
    <S.UnorderedList opacity = {!address || code !== cepValue? 0 : 1 }  >
      <li>{address ? '' : 'Rua: '}{address}</li>
      <li>Bairro: {district}</li>
      <li>Cidade: {city}</li>
      <li>Estado: {state}</li>
    </S.UnorderedList>
  );
};

export default CepInfo;
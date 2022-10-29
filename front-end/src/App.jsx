import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Form from './Components/FormComponent/Form';
import CepInfo from './Components/CepInfo/CepInfo';
import CepInfoContext from './contexts/CepInfoContext';

const App = () => {
  const CEP_PATTERN = '99999-999';
  const [cepValue, setCepValue] = useState('');
  const [cepInfo, setCepInfo] = useState({});
  console.log(cepInfo);

  if(cepInfo.code === 404 || cepInfo.code === 500) {
    console.log('achou o code');
  }

  return (
    <CepInfoContext.Provider value={{CEP_PATTERN, cepValue, setCepValue, cepInfo, setCepInfo}}>
      <main className='app-wrapper'>
        <h1>Runner is up and running 5(hehehe) </h1>
        <Form />
        <CepInfo />
        <p>{cepInfo.message}</p>
      </main>
    </CepInfoContext.Provider>
  );
};

export default App;

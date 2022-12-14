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
  
  return (
    <CepInfoContext.Provider value={{CEP_PATTERN, cepValue, setCepValue, cepInfo, setCepInfo}}>
      <main className='app-wrapper'>
        <div className="mobile-wrapper">
          <div className='content-wrapper'>
            <h1>Rede D&apos;or</h1>
            <h2>Busca CEP</h2>
            <Form />
            <p>{cepInfo.message}</p>
            <CepInfo />
          </div>

        </div>
      </main>
    </CepInfoContext.Provider>
  );
};

export default App;
